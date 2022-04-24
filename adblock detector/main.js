setTimeout(() => {

    document.body.innerHTML +='<div class="adsbygoogle" id="ad-detector"> </div>';
    var adElement = document.getElementById("ad-detector");
    var adElementStyle = getComputedStyle(adElement, null);

    if(adElementStyle.display === "none"){
        document.getElementsByClassName("detect")[0].innerHTML = "Adblock detected!";
        document.getElementsByClassName("detect")[0].classList.add("ab");
        document.getElementsByClassName("ad-p")[0].innerHTML = "Our website is made possible by displaying online advertisements to our visitors.Please consider supporting us by disabling your ad blocker on our website.";
    }

    else{
        document.getElementsByClassName("detect")[0].innerHTML = "Adblock disabled!";
        document.getElementsByClassName("detect")[0].classList.add("no-ab");
        document.getElementsByClassName("ad-p")[0].innerHTML = "Thank you for disabling ad blocker.";
    }
}, 2000);