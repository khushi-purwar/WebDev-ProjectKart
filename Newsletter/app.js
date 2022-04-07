const express = require("express") 
const bodyParser  =require("body-parser")
const https = require("https") ;
const app = express() ;
app.use(bodyParser.urlencoded({extended :true})) ;

app.use(express.static("public")); 
app.get("/" , function(req ,res){
    res.sendFile(__dirname + "/signup.html");
});


app.post ("/" ,function(req,res){
 
    var firstName = req.body.fName ;
    var lastName = req.body.lName ;
    var email = req.body.Email;
   
    var data = {
        members :[
            {
                email_address: email,
                status:"subscribed",
                merge_fields:{
                    FNAME: firstName ,
                    LNAME: lastName
                }
            }
        ] 

        
    };

    var jsonData = JSON.stringify(data) ;

    const url = "https://us1.api.mailchimp.com/3.0/lists/bf30caf278" ;
    
    const options = {
        method:"POST",
        auth: "abhishek1:e5f72185f457cb5c6682194daf70947c-us1"
    }
    
    const request = https.request(url , options ,function(response){

        if(response.statusCode ===200){
            res.sendFile(__dirname + "/success.html") ;
        }else{
            res.sendFile(__dirname + "/failure.html") ;
        }
            response.on("data" , function(data){
                console.log(JSON.parse(data));
            })
    })
        request.write(jsonData) ;
        request.end() ;

});

app.post("/failure" ,function(req ,res){
    res.redirect("/") ;
})

app.listen(process.env.PORT || 3000 ,function(){
        console.log("Listening bro....") ;
});

// // API KEY
// e5f72185f457cb5c6682194daf70947c-us1

// UNIQUE ID
// bf30caf278