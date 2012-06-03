class ResourcesController < ApplicationController
  protect_from_forgery

  def index
    if request.xhr?
      render :text => "alert('you win');"
    end

    @query = params[:query] ? params[:query] : 'Search a world of maps'

  end

end
