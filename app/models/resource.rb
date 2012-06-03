class Resource
  include Mongoid::Document
  include Mongoid::Taggable
  field :title
  field :uri
  field :visible_uri
  has_many :comments
end
