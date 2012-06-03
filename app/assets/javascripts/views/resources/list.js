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
