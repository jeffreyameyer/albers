define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/resource'
], function($, _, Backbone, Resource){
  var ResourceCollection = Backbone.Collection.extend({
    model: Resource,
    initialize: function(){

    }

  });
 
  return new ResourceCollection;
});
