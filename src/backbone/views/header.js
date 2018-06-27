import $ from 'jquery'
import Backbone from 'backbone';
var Header = Backbone.View.extend({
    el: '#header',
     render: function() {
        $(this.el).text('Home Screen Header');
     }
});

module.exports = Header;