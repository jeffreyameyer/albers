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
    @resources = Sunspot.search(Comment){}.results
    if @resources.count < Resource.threshold
      Delayed::Job.enqueue(CollectorResourceJob.new(query))
    end
  end

end
