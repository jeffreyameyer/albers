define([
  'Underscore',
  'Backbone'
], function(_, Backbone) {
    Resource = Backbone.Model.extend({
        defaults: {
            _id: null,
            tag_array: [],
            title: "",
            uri: "",
            visible_uri: "",
            notes: [],
        },
        
        upvote: function() {
            _rating = this.get("rating") + 1;
            this.set({ rating: _rating });
        },
        
        downvote: function() {
            _rating = this.get("rating") - 1;
            this.set({ rating: _rating });
        },
        
        add_note: function( newNote ) {
            _notes = this.get("notes");
            _notes.append( newNote );
            this.set({ notes: _notes });
        },
        
        initialize: function(){
        }
    });

    return Resource;
});
