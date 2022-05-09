// javascript/view/login.view.js
Application.LoginView = Backbone.View.extend({
  // Get login template
  template : _.template(Application.getTemplate("login.html")),
  
  events : {
    "click #btn_submit" : "login"
  },

  initialize : function() {
  },

  render : function() {
    var self = this;
    self.$el.html(self.template());
    return this;
  },

  // login
  login : function(event) {
    var self = this, data;
    event.preventDefault();
    // Prevent form from reloading the page
    $('.alert').hide();
    // Hide the alerts
    $("#login_form input").removeClass('invalid');
    // reset fields
    // get the data from the form inputs
    data = {
      "username" : $("#username").val(),
      "password" : $("#password").val()
    };

    // submit the form
    $.ajax({
      url : "login.php",
      type : "POST",
      dataType : "json",
      data : data,
      success : function(response) {
        // failure
        if (response.success != "1") {
          var invalid_field = response.data.field;
          // highlight, reset, and focus, invalid field
          $("#" + invalid_field).addClass('invalid').val("").focus();
          $("#error").html(response.msg).show();
        }
        // Success
        else {
          // reset fields
          $("#login_form input").val("");
          $("#success").html("<h1>"+response.msg+"</h1><br /><img src='http://placedog.com/400/300'>").show();
          // Redirect user on successful login
          // window.location.replace("#");
        }
      }
    });

  }
});
