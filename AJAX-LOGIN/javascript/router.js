// javascript/router.js

Application.Router = Backbone.Router.extend({

  routers : {
    "login" : "login"
  },
  
  // setup main page to load when application starts
  initialize: function(){
    var self = this;
    // render the login view
    self.LoginView = $("#main").html(new Application.LoginView().render().el);
  },
  
  // login view
  login : function() {
    var self = this;
    if(self.Loginview){
      self.LoginView.login("#");
    } else {
      self.LoginView = $("#main").html(new Application.LoginView().render().el);
      self.LoginView.login("#");
    }

  }
});


