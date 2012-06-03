class Resource
  include Mongoid::Document
  include Mongoid::Taggable
  field :title
  field :uri
  field :visible_uri
  has_many :comments

  include Sunspot::Mongo
  searchable do
    string :tags, :multiple => true
    text :uri
  end

  THRESHOLD = 20 #Number of resources needed to not kick off job
  def self.threshold
    THRESHOLD
  end

  def self.collect_new_resources
    #TODO: This is where you do thing.
  end
end
