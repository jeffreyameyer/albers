define([
    'jQuery',
    'Underscore',
    'Backbone',
    'views/resources/list',
    'views/search_bar',
    'text!templates/albers.html'
], function($, _, Backbone, ResourcesListView, SearchBarView, AlbersTemplate){
    var AlbersView = Backbone.View.extend({
        el: $("#container"),
        initialize: function(){
        },
        render: function(){

            var data = {
                _: _ 
            };
            var compiledTemplate = _.template( AlbersTemplate, data );
            this.el.html( compiledTemplate );

            console.log($(".search-bar"));
            this.resourcesListView = new ResourcesListView({ el: $(".results") });
            this.searchBarView = new SearchBarView({ el: $(".search-bar") });
            this.searchBarView.searchResults = this.resourcesListView;

            this.searchBarView.render();
            this.resourcesListView.render();
        }
    });
    return new AlbersView;
});
