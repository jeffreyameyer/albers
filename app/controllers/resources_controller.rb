class ResourcesController < ApplicationController
  protect_from_forgery

  def index
    if request.xhr?
      render :text => "alert('you win');"
    end

    @query = params[:query] ? params[:query] : 'Search a world of maps'

  end

  def search
    @resources = Sunspot.search(Comment){}.results
    if @resources.count < Resource.threshold
      Resource.delay.collect_new_resources
    end
  end

end
