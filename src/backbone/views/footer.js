import $ from 'jquery'
import Backbone from 'backbone';

var Footer = Backbone.View.extend({
    el: '#footer',
     render: function() {
        $(this.el).text('Home Screen Footer');
     }
});

module.exports = Footer;