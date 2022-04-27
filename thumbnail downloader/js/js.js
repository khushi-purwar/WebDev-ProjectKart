function img_create(src, alt, title) {
    var img = new Image();
    img.src = src;
    img.SameSite = "None";
    if ( alt != null ) img.alt = alt;
    if ( title != null ) img.title = title;
    return img;
}

function app() {
    document.getElementById("but").disabled = true;
    var url = document.getElementById("videoId").value;
    if(!url) {
        alert("Enter URL first then submit.");
        return;
    }
    var vid = "";
    var reg = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(reg);
    if ( match && match[7].length == 11 ){
        vid = "https://img.youtube.com/vi/" + match[7];
    } else{
        alert("Could not extract video ID. Possibly wrong URL.");
        return;
    }
    imgUrl1 = vid + "/1.jpg";
    imgUrl2 = vid +"/2.jpg"
    imgUrl3 = vid +"/3.jpg"
    imgUrlDefault = vid +"/default.jpg"
    imgUrlMqDefault = vid + "/mqdefault.jpg"
    imgUrlHqDefault = vid + "/hqdefault.jpg"
    imgUrlMaxResDefault = vid +"/maxresdefault.jpg"
    var img1 = img_create(imgUrl1, "Auto Thumb-1", "Thumbnail1")
    var img2 = img_create(imgUrl2, "Auto Thumb-2", "Thumbnail2")
    var img3 = img_create(imgUrl3, "Auto Thumb-3", "Thumbnail3")
    var imgDefault = img_create(imgUrlDefault, "Default", "Default")
    var imgMqDefault = img_create(imgUrlMqDefault, "MQ Default", "MQ Default")
    var imgHqDefault = img_create(imgUrlHqDefault, "HQ Default", "HQ Default")
    var imgMaxResDefault = img_create(imgUrlMaxResDefault, "MaxRes Default", "MaxRes Default")
    var imgUrlsElements = [imgMaxResDefault, imgHqDefault, imgMqDefault, imgDefault, img3, img2, img1]; 
    for(var i=0; i<imgUrlsElements.length; i++) {
        var imgContainer = document.createElement("div");
        imgContainer.id = "imgContainer";
        var link = document.createElement("a");
        link.href = imgUrlsElements[i].src;
        link.download =  imgUrlsElements[i].title + ".jpg";
        link.appendChild(imgUrlsElements[i]);
        imgContainer.appendChild(link);
        var titleContainer = document.createElement("div");
        titleContainer.id = "titleContainer";
        titleContainer.innerHTML = "<p>" + imgUrlsElements[i].title+ "</p>"
        imgContainer.appendChild(titleContainer);        
        document.getElementById("thumbnails").appendChild(imgContainer);  
    }
}
// :D Completed  
