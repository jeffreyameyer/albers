define([
    'jQuery',
    'Underscore',
    'Backbone',
    'text!templates/search_bar.html'
], function($, _, Backbone, SearchBarTemplate) {
    var SearchBarView = Backbone.View.extend({
        intialize: function() {

        },
        render: function() {
            console.log(this.el);

            var data = {
                _: _
            };

            var compiledTemplate = _.template( SearchBarTemplate, data );
            $(this.el).html( compiledTemplate );
        },
        
        events: {
            'click .search': 'searchResources'
        },

        searchResources: function() {
            this.searchResults.updateResources($('.search_box').val());
        }
    });

    return SearchBarView;
});