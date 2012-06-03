namespace :index do
  desc "Reindex all Resources"
  task :reindex do 
    Sunspot.index(Resource.all)
  end
end
