namespace :index do
  desc "Reindex all Resources"
  task :reindex => :environment do 
    Sunspot.index(Resource.all)
  end
end
