desc "Run search query"
task :run_search, :query => :environment do |t, args|
  args.with_defaults(:query => "Test")
  # get json results
  results = ImageSearch.new(query)
  # tokenize the search query to create tags
  tags = TokenizeQuery.new(query)
  
  # add stuff to update db
end