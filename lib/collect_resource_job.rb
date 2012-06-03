class CollectResourceJob  < Struct.new(:query)
  def perform
    results = JSON.parse(ImageSearch.run(query))
    tags = TokenizeQuery.run(query)
    built_tags = []
    tags.each do |tag|
      t = Tag.find_or_create_by(:name => tag)
      t.save
      built_tags << t
    end

    results.each do |result|
      res = Resource.new(result)
      res.tags_array = []
      built_tags.each do |tag|
        res.tags_array << {:tag_id => tag._id, :rating => 0}
      end
      res.save
    end

    Sunspot.commit
  end
end
