define([
    'jQuery',
    'Underscore',
    'Backbone',
    'models/resource.js'
], function($, _, Backbone, Resource){
  var ResourceCollection = Backbone.Collection.extend({
    model: Resource,
    initialize: function(){

    }

  });
 
  return new ResourceCollection;
});
