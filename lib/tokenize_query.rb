module TokenizeQuery
  def self.run(query)
    tags = query.split(' ') 
    tags.count > 3 ? tags : tags << query
  end
end