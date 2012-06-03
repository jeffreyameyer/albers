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
            visible_uri: null,
            visibile_uri: null,
            comments: [],
        },
        
        // this is Daniel's fault
        v_url: function() {
            if (this.get("visible_uri")) {
                return this.get("visible_uri");
            } else {
                return this.get("visibile_uri");
            }
        },
        
        comments: function() {
            comments_str = "";
            _.each(this.get("comments"), function(comment) {
                if (comments_str == "") 
                    comments_str += (" || " + comment);
                else
                    comments_str = comment;
            });
            return comments_str;
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
