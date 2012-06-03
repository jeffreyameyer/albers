class Resource
  include Mongoid::Document
  field :title
  field :uri
  field :visible_uri
  has_many :comments
  field :tags_array

  include Sunspot::Mongo
  searchable do
    string :tag, :multiple => true do
      tags_array.map{|t| Tag.find(t.tag_id).name rescue ""}
    end
    text :uri
  end

  THRESHOLD = 20 #Number of resources needed to not kick off job
  def self.threshold
    THRESHOLD
  end

end
