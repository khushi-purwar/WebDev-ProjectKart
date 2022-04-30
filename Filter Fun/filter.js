var canvas=document.getElementById("can");
var image = null;
var imgRed = null;
var imgGreen = null;
var imgBlue = null;
var imgGrey = null;
var imgRbow = null;
var imgBlur = null;
var imgReset = null;
function loadimg()
{
  var imgin=document.getElementById("imgg");
  image=new SimpleImage(imgin);
  imgRed=new SimpleImage(imgin);
  imgGreen=new SimpleImage(imgin);
  imgBlue=new SimpleImage(imgin);
  imgGrey=new SimpleImage(imgin);
  imgRbow=new SimpleImage(imgin);
  imgBlur=new SimpleImage(imgin);
  imgReset=new SimpleImage(imgin);
  imgWin=new SimpleImage(imgin);
  image.drawTo(canvas);
}
function dored()
{
  for(var pixel of imgRed.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128)
        {
          pixel.setRed(avg*2);
          pixel.setGreen(0);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(255);
          pixel.setGreen(avg*2);
          pixel.setBlue(avg*2);
        }
      
    }
  imgRed.drawTo(canvas);
}
function dogreen()
{
  for(var pixel of imgGreen.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128)
        {
          pixel.setRed(0);
          pixel.setGreen(avg*2);
          pixel.setBlue(0);
        }
      else
        {
          pixel.setRed(avg*2);
          pixel.setGreen(255);
          pixel.setBlue(avg*2);
        }
    }
  imgGreen.drawTo(canvas);
}
function doblue()
{
  for(var pixel of imgBlue.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      if(avg<128)
        {
          pixel.setRed(0);
          pixel.setGreen(0);
          pixel.setBlue(avg*2);
        }
      else
        {
          pixel.setRed(avg*2);
          pixel.setGreen(avg*2);
          pixel.setBlue(255);
        }
    }
  imgBlue.drawTo(canvas);
}
function clearr()
{
  var context = canvas.getContext("2d");
 context.clearRect(0, 0, image.width, image.height);
  return;
}
function dogrey()
{
  for(var pixel of imgGrey.values())
    {
      var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
      
          pixel.setRed(avg);
          pixel.setGreen(avg);
          pixel.setBlue(avg);
     
    }
  imgGrey.drawTo(canvas);
}


function dorainbow() {
  var img_Y = imgRbow.getHeight()
  for (var pixel of imgRbow.values()) {
    var pix_Y = pixel.getY();
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 7;

    if ((pix_Y < img_Y / 7) && (avg < 128)) {
      pixel.setRed(avg * 2);
      pixel.setGreen(0);
      pixel.setBlue(0);
    } else if ((pix_Y < img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(avg * 2 - 255);
      pixel.setBlue(avg * 2 - 255);
    }
    if ((pix_Y < 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(0.8 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 2 * img_Y / 7) && (pix_Y > img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(1.2 * avg - 51);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(2 * avg);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 3 * img_Y / 7) && (pix_Y > 2 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(2 * avg);
      pixel.setBlue(0);
    } else if ((pix_Y <= 4 * img_Y / 7) && (pix_Y > 3 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(255);
      pixel.setBlue(2 * avg - 255);
    }

    if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 5 * img_Y / 7) && (pix_Y > 4 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(2 * avg - 255);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    }

    if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(0.8 * avg);
      pixel.setGreen(0);
      pixel.setBlue(2 * avg);
    } else if ((pix_Y <= 6 * img_Y / 7) && (pix_Y > 5 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(1.2 * avg - 51);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(255);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg < 128)) {
      pixel.setRed(1.6 * avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6 * avg);
    } else if ((pix_Y >= 6 * img_Y / 7) && (avg >= 128)) {
      pixel.setRed(0.4 * avg + 153);
      pixel.setGreen(2 * avg - 255);
      pixel.setBlue(0.4 * avg + 153);
    }
  }
 
  imgRbow.drawTo(canvas);
  return;
}
function reset()
{
  image.drawTo(canvas);
}
function doblur() {
 for(var pixel of imgBlur.values()){
    var rndm = Math.random();
    var x = pixel.getX();
    var y = pixel.getY();
  if(rndm < 0.7){
     imgBlur.setPixel(x,y,pixel);
     }
  else{
     getnewPixel(x,y);
    }
  }
  imgBlur.drawTo(canvas);
  return;
}

function getnewPixel(x,y){
  var h = imgBlur.getHeight();
  var w = imgBlur.getWidth();
  var rndmX = Math.floor(Math.random()*10);
  var rndmY = Math.floor(Math.random()*10);
  if(rndmX > w-1){
    rndmX = w-1;
  }
  else if(rndmX < 0){
    rndmX = 0;
  }
  if(rndmY > h-1){
    rndmY = h-1
  }
  else if(rndmY < 0){
    rndmY = 0;
  }
  var newPixel = imgBlur.getPixel(rndmX,rndmY);
  imgBlur.setPixel(x,y,newPixel);
  return;
}
