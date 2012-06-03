// Filename: router.js
define([
  'jQuery',
  'Underscore',
  'Backbone',
  'views/albers',
], function($, _, Backbone, AlbersView ){
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'defaultAction'
    },
    defaultAction: function(actions){
        AlbersView.render();
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
