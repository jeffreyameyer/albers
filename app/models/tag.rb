class Tag
  include Mongoid::Document
  has_and_belongs_to_many :resources
  field :name
end
