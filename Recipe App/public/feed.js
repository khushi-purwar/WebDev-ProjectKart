window.onload = function () {
  var photo=document.getElementById("photoBtn");
  var locationBtn=document.getElementById("locationBtn");
  locationBtn.addEventListener("click", handler);
  var capture=document.getElementById("capture");
  photo.addEventListener("click",initializeMedia);
  capture.addEventListener("click",wtf);
};

function initializeLocation() {
  if (!("geolocation" in navigator)) {
    locationBtn.style.display='none';
  }
}

function handler(event) {
  if (!("geolocation" in navigator)) {
    return;
  }

  navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position);
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    latitude.innerHTML = lat;
    longitude.innerHTML = lon;
  });
}

function initializeMedia(){
    if(!('mediaDevices' in navigator)){
        navigator.mediaDevices={};
    }

    if(!('getUserMedia' in navigator.mediaDevices)){
        navigator.mediaDevices.getUserMedia=function(constraints){
            var getUserMedia=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;

            if(!getUserMedia){
                return Promise.reject(new Error('getUserMedia is not implemented!'));
            }

            return new Promise(function(resolve,reject){
                getUserMedia.call(navigator,constraints,resolve,reject);
            });
        }
    }

    navigator.mediaDevices.getUserMedia({video:true})
    .then(function(stream){
        player.srcObject=stream;
        player.style.display='block';
        
    })
    .catch(function(err){
        console.log(err);
        imagePicker.style.display='block';
    });
}

function wtf (event){
    canvas.style.display='block';
    player.style.display='none';
    capture.style.display='none';

    var context=canvas.getContext('2d');
    context.drawImage(player,0,0,canvas.width,player.videoHeight/(player.videoWidth/canvas.width));
    player.srcObject.getVideoTracks().forEach(function(track){
        track.stop();
    })
}