var Header = Backbone.View.extend({
    el: '#footer',
     render: function() {
        $(this.el).text('Home Screen Footer');
     }
});

module.exports = Header;