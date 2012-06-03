define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/resource'
], function($, _, Backbone, Resource){
  var ResourceCollection = Backbone.Collection.extend({
      model: Resource,

      url: function () {
          return '/resources/search.json?query=' + encodeURIComponent(this.keywords)
      },
      
      initialize: function(){
          this.keywords = '';
      }
      
  });
 
  return new ResourceCollection;
});
