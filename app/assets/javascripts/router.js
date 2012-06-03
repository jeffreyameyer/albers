// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/resources/list',
], function($, _, Backbone, ResourcesListView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '/resources': 'showResources',
      
      '*actions': 'defaultAction'
    },
    showResources: function(){
        ResourcesListView.render();
    },
    defaultAction: function(actions){
        this.showResources();
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
