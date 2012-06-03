class CollectResourceJob  < Struct.new(:query)
  def perform
    results = JSON.parse(ImageSearch.run(query))
    tags = TokenizeQuery.run(query)

    results.each do |result|
      res = Resource.new(result)
      res.tags = tags.join(",")
      res.save
    end

    Sunspot.commit
  end
end
