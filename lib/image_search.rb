require 'google-search'
require 'json'

class ImageSearch
  attr_reader :results
  def initialize(query)
    @results = []
    
    Google::Search::Image.new(:query => query).each do |image|
      @results << { 'uri' => image.uri, 'title' => image.title, 'visibile_uri' => image.visible_uri }
    end
    
    @results.to_json
  end
end