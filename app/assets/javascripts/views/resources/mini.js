define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/resources/detailed',
    'text!templates/resources/mini.html'
], function($, _, Backbone, ResourcesDetailedView, ResourcesMiniTemplate){
    var ResourcesMiniView = Backbone.View.extend({
        initialize: function() {
        },
        render: function() {
            console.log(this.el);

            var data = {
                resource: this.model,
                _: _
            };

            var compiledTemplate = _.template( ResourcesMiniTemplate, data );
            this.el.html( compiledTemplate );
        },
        events: { 
            "click .thumbnail" : "showDetailedView",
            "click .ratings" : "showDetailedView"
        },
        showDetailedView: function() {
            this.detailed_view = new ResourcesDetailedView({ el : $("#details-content"),
                                                             model : this.model });
            this.detailed_view.render();
            console.log($("#details-content"));

            $.facebox({ div: '#details-content' });

        }
    });

    return ResourcesMiniView;
});


