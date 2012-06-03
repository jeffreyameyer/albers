class Resource
  include Mongoid::Document
  field :title
  field :uri
  field :visible_uri
  has_many :comments
  field :tags_array, :default => []
  after_save :reindex

  include Sunspot::Mongo
  searchable do
    text :tag do
      self.tags_array.map{|t| t['tag_name']}.join(", ")
    end
    text :uri
    text :title
  end

  THRESHOLD = 20 #Number of resources needed to not kick off job
  def self.threshold
    THRESHOLD
  end

  private
  def reindex
    Sunspot.index(self)
  end

end
