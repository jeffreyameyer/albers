Albers::Application.routes.draw do

  resources :resources do
    collection do
      get :search
    end
  end

  root :to => 'resources#index'

end
