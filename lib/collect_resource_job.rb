class CollectResourceJob  < Struct.new(:query)
  def perform
    results = JSON.parse(ImageSearch.run(query))
    tags = TokenizeQuery.run(query)
    tags.map do |tag|
      t = Tag.find_or_create_by(:name => tag)
      t.save
    end

    results.each do |result|
      res = Resource.new(result)
      res.tags_array = []
      tags.each do |tag|
        tags_array << {:tag_id => tag._id, :rating => 0}
      end
      res.save
    end

    Sunspot.commit
  end
end
