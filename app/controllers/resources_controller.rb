class ResourcesController < ApplicationController
  protect_from_forgery

  respond_to :html, :json

  def index
    @query = params[:query] ? params[:query] : 'maps'
    respond_with Resource.solr_search {fulltext @query; paginate :page => 1}.results
  end

  def show
    respond_with Resource.find(params[:id])
  end

  def update
    @resource = Resource.find(params[:id])
    # params[:downvote] or params[:upvote]
    tags = JSON.parse(params[:tags]) rescue []
    unless tags.blank?
      if params[:upvote]

      elsif params[:downvote]

      end
    end
    @resource.save!
    respond_with @resource
  end

  def search
    query = params[:query]
    page = (params[:page].blank? ? 1 : params[:page])
    @resources = Resource.solr_search { fulltext query; paginate :page => page}.results
    logger.warn "RESOURCES: #{@resources}"
    if params[:page].blank? || params[:page].to_i <= 1
      if @resources.count < Resource.threshold
        Delayed::Job.enqueue(CollectResourceJob.new(query))
      end
    end
    respond_with(@resources, :include => :comments)
  end

end
