class ResourcesController < ApplicationController
  protect_from_forgery

  def index
    if request.xhr?
      render :text => "alert('you win');"
    end
  end

end
