define([
    'jQuery',
    'Underscore',
    'Backbone',
    'collections/resource_collection',
    'views/resources/mini',
    'text!templates/resources/list.html'

], function($, _, Backbone, resourcesCollection, ResourcesMiniView, ResourcesListTemplate){
    var ResourcesListView = Backbone.View.extend({
        el: $("#results"),
        initialize: function(){
            this.collection = resourcesCollection;
            this.collection = resourcesCollection.add({ 
                _id: "e1",
                uri: "http://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Antidorcas_marsupialis_2.jpg/334px-Antidorcas_marsupialis_2.jpg",
                tags_array: [ { tag_name: "tag1" }, { tag_name: "tag2" }, { tag_name: "tag3" }]
            });

            this.collection = resourcesCollection.add({ 
                _id: "e2",
                uri: "http://upload.wikimedia.org/wikipedia/commons/thumb/4/45/2007-03-11_Amylostereum_laevigatum.jpg/100px-2007-03-11_Amylostereum_laevigatum.jpg",
                tags_array: [ { tag_name: "tag4" }, { tag_name: "tag5" }, { tag_name: "tag6" }]
            });
            this.resource_views = [];
        },
        render: function(){
            // render the details for an item
            // TODO: call this when they click
            // $.facebox({ div: '#details-content' });

            var data = {
                resources: this.collection.models,
                _: _ 
            };
            var compiledTemplate = _.template( ResourcesListTemplate, data );
            this.el.html( compiledTemplate );

            var that = this;
            _.each(this.collection.models, function(resource) {
                view = new ResourcesMiniView({ el: $("#" + resource.get("_id")),
                                               model: resource });
                view.render();
                that.resource_views.push(view);

            });
        },
        updateResources: function(keywords) {
            var that = this;
            this.collection.keywords = keywords;
            this.collection.fetch({
                success: function() {
                    that.render();
                }
            });
        }
    });
    return ResourcesListView;
});
