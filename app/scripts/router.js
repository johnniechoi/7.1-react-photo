var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');

//Local Imports
var AppComponent = require('./components/app.jsx').AppComponent;
var Models = require('./models/model')
var NavBar = require('./components/form.jsx').Navigation;
var Images = require('./components/listing.jsx').ImageListing;
// var appComponent = require('./components/app.jsx').AppComponent;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  // events: {
  //   'click .submit': addForm
  // },
  index: function(){
    ReactDOM.render(
      React.createElement(AppComponent),
      document.getElementById('app')
    )
    // ReactDOM.render(
    //   React.createElement(Images),
    //   document.getElementById('image')
    // )
  },

  // addForm: function(){
  //
  // }
})

var router = new AppRouter();

module.exports = router;
