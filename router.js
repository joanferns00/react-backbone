
//import Header from './views';
var Header = require("./views/Header");
var Footer = require("./views/Footer");

var AppRouter = Backbone.Router.extend({
    routes: {
        'nowplaying': 'nowplaying',
        'schedule': 'schedule',
        '*actions': 'home'
    }
});



var initialize = function () {
    var appRouter = new AppRouter;

    appRouter.on('route:home', function () {        
        /*var view = new Header();
        $('#app').html(view.render().$el);*/
        var header = new Header();
        var footer = new Footer();        
        header.render();        
        $('#content').text("Home Screen");
        footer.render();         
    });

    appRouter.on('route:schedule', function () {
        $('#content').text("Scheduled Program");
    });    

    appRouter.on('route:nowplaying', function () {
        $('#content').text("Now playing!!");
    });      

    /*appRouter.on('route:nowplaying', function () {
        require.ensure([], function () {
            require('./nowplayingView');
        });
    });

    appRouter.on('route:schedule', function () {
        require.ensure([], function () {
            require('./scheduleView');
        });
    });*/

    Backbone.history.start();
};

module.exports = initialize;