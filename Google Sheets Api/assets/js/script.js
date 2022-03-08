function opent(tName, elmnt, color) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("tablink");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].style.backgroundColor = "";
    }
    document.getElementById(tName).style.display = "block";
    elmnt.style.backgroundColor = color;
    handleShowData(); 
  }
  
  
  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 5000);
  }
  $(function () {
              $('#myForm').submit(function (e) {
                  e.preventDefault();
                  var myData = $('form#myForm :input').serialize();
                  var url = ScriptUrl
                  console.log(myData)
                  $.ajax({
                      url: url
                      , method: 'POST'
                      , data: myData
                      , success: function (data) {
                          console.log(data)
                      }
                  });
                  var x = document.getElementById("snackbar");
                        x.className = "show";
                        setTimeout(function () {
                        x.className = x.className.replace("show", "");
                        }, 5000);
                        $('#myForm')[0].reset();

                 });
        
            
          });
          function handleShowData () {
             
  
               $('#ans').empty();
               var thead='<thead><tr><th>First Name</th>  <th>Last Name</th>  <th>Company</th><th>Group</th> <th>Email</th></tr></thead>'
               $('#ans').html(thead)
              
                  var url = ScriptUrl;
                
                  $.getJSON(url, function (data) {
                 
                    var html;
                      $.each(data, function (key, val) {
                     
                            data.forEach(function(val) {
                          html= '<tr>';
                         });
                          for (var x = 0; x < val.length; x++) {
                              html += '<td> '+val[x] + '</td>'
                          }
                          html += '</tr>'
                          $('#ans').append(html);
                      });
              
                   
                  });
                 
              }