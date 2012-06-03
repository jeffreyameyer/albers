define([
  'jQuery',
  'Underscore',
  'Backbone',
  'collections/resource_collection',
  'text!templates/resources/list.html'

], function($, _, Backbone, resourcesCollection, ResourcesListTemplate){
  var ResourcesListView = Backbone.View.extend({
    el: $("#page"),
    initialize: function(){
      this.collection = resourcesCollection;
      this.collection = resourcesCollection.add({ 
          thumbnailLink: "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Antidorcas_marsupialis_2.jpg/334px-Antidorcas_marsupialis_2.jpg",
          notes: [ "hello", "goodbye" ],
          rating: 5,
          tags: [ "tag1", "tag2", "tag3" ]
      });

      this.collection = resourcesCollection.add({ 
          thumbnailLink: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/2007-03-11_Amylostereum_laevigatum.jpg/100px-2007-03-11_Amylostereum_laevigatum.jpg",
          notes: [ ],
          rating: 3,
          tags: [ "tag4", "tag5", "tag6" ]
      });
    },
    render: function(){
      var data = {
        resources: this.collection.models,
        _: _ 
      };
      var compiledTemplate = _.template( ResourcesListTemplate, data );
      $("#results").html( compiledTemplate );
    }
  });
  return new ResourcesListView;
});
