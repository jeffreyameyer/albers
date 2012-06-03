class ResourcesController < ApplicationController
  protect_from_forgery

  respond_to :html, :json

  def index
    @query = params[:query] ? params[:query] : '5th grade'
    respond_with Resource.tagged_with_any(@query.split(" "))
  end

  def show
    respond_with Resource.find(params[:id])
  end

  def search
    query = params[:query]
    page = (params[:page].blank? ? 1 : params[:page])
    @resources = Resource.solr_search { fulltext query; paginate :page => page}.results
    logger.warn "RESOURCES: #{@resources}"
    if params[:page] && params[:page].to_i <= 1
      if @resources.count < Resource.threshold
        Delayed::Job.enqueue(CollectResourceJob.new(query))
      end
    end
    respond_with(@resources, :include => :comments)
  end

end
