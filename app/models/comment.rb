class Comment
  include Mongoid::Document
  belongs_to :resource
  field :body

  include Sunspot::Mongo
  searchable do
    text :body
  end
end
