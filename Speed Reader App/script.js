$(function () {
    var myArray, inputLength, reading = false, frequency = 200,action,counter;
    //on page load and hide elements we don`t need
    $("#new").hide();
    $("#resume").hide();
    $("pause").hide();
    $("#controls").hide();
    $("#result").hide();
    $("#error").hide();
    //click on start reading
    $("#start").click(function () {
        myArray = $("#userInput").val().split(/\s+/);
        inputLength = myArray.length;
        if (inputLength > 1) {
            reading = true;
            //hide start 
            $("#start").hide();
            $("#error").hide();
            $("#userInput").hide();
            $("#new").show();
            $("pause").show();
            $("#controls").show();
            //set progress slider max
            $('#progressslider').attr("max", inputLength - 1);
            
            //start the counter at zero
            counter = 0;
            
            //show reading box with the first word
            $("#result").show();
            $("#result").text(myArray[counter]);
            
            //start reading the first word
            action = setInterval(read, frequency);
        }
        else{
            $("#error").show();
        }
    });
    //click on New 
    $("#new").click(function () {
        location.reload();
    });
    //click on pause 
    $("#pause").click(function () {
        clearInterval(action);
        reading = false;
        
        //hide pause 
        $("#pause").hide();
        $("#resume").show();
    });
    //click on resume
    $("#resume").click(function () {
        action = setInterval(read, frequency);
        // go back to5 reading mode
        reading = true;
        //hide resume
        $("#resume").hide();
        $("#pause").show();
    });
    //change fontsize
    $('#fontsizeslider').on('slidestop', function (event, ui) {
        $('#fontsizeslider').slider('refresh');
        //get the value of slider
        var slidervalue = parseInt($("#fontsizeslider").val());
        $("#result").css("fontsize", slidervalue);
        $("#fontsize").text(slidervalue);
    });
    //change the speed
    $('#speedslider').on('slidestop', function (event, ui) {
       
        //refresh the slider
        $('#speedslider').slider("refresh");
                                                
        //get the value of slider
        var slidervalue = parseInt($("#speedslider").val());
        $('#speed').text(slidervalue);
        
        //stop reading
        clearInterval(action);
        
        //change frequency
        frequency = 60000 / sliderValue;
        
        //resume reading ig we are in reading mode
        if (reading) {
            action = setInterval(read, frequency);
        }
    });
    
    //progress slider
$("#progressslider").on('slidestop', function (event, ui) {
    
    //refresh the slider
    $("#progressslider").slider("refresh");
    //get the value of slider
    
    var slidervalue = 
parseInt($("#progressslider").val());
    
    //stop reading
    clearInterval(action);
    
    //change counter
    counter = slidervalue;
    
    //change word
    $("#result").text(myArray[counter]);
    
    //change the value of progress

$('#percentage').text(Math.floor(counter / (inputLength - 1) * 100));
    
    //resume reading if we are in reading mode
    if (reading) {
        action = setInterval(read, frequency);
    }
});
    //functions
    function read () {
        if (counter == inputLength - 1) {
            clearInterval(action);
            reading = false;
            $("#pause").hide();
        }else {
            //counter goes up by one
            counter++;
            
            //get word
            $("#result").text(myArray[counter]);
            
            //change progress slider value and refresh 
            
$('#progressslider').val(counter).slider('refresh');
            
            //change text of percentage
            
$('#percentage').text(Math.floor(counter / (inputLength - 1) * 100));
        }
    }
});