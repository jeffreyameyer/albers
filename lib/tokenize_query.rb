class TokenizeQuery
  attr_reader :tags
  def initialize(query)
    @tags = []
    
    @tags = query.split(" ")
    @tags << query
  end  
end