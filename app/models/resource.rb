class Resource
  include Mongoid::Document
  field :title
  field :uri
  field :visible_uri
  has_many :comments
end
