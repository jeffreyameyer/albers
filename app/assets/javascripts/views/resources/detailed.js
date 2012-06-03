define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/resources/detailed.html'
], function($, _, Backbone, ResourcesDetailedTemplate){
    var ResourcesDetailedView = Backbone.View.extend({
        initialize: function() {
        },
        render: function() {
            console.log("ohai!");
            var data = {
                resource: this.model,
                _: _
            };

            var compiledTemplate = _.template( ResourcesDetailedTemplate, data );
            this.el.html( compiledTemplate );
        },
    });

    return ResourcesDetailedView;
});


