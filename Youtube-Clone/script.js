
var header = document.querySelector(".header-navbar");
var ctg = header.getElementsByClassName("navbar-element");

for (var i = 0; i < ctg.length; i++) {
  ctg[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}


var sidebar = document.querySelector(".sidebar");
var sidebarCategory = sidebar.getElementsByClassName("sidebar-category");
var sidebarCategories = sidebar.getElementsByClassName("sidebar-categories");
var subscriptionCategories = sidebar.getElementsByClassName("subscription-categories");
var sidebarHiddenCategories = sidebar.getElementsByClassName("hidden-categories");
var showMoreText = sidebar.querySelector(".showmore-text");
var showMoreIcon = sidebar.querySelector(".show-more-icon");
var showLessIcon = sidebar.querySelector(".show-less-icon");
sidebarHiddenCategories[0].style.display = "none";

for (var i = 0; i < sidebarCategory.length; i++) {
    sidebarCategory[i].addEventListener("click", function() {
        if(this === sidebar.getElementsByClassName("showmore")[0]) {
            if (sidebarHiddenCategories[0].style.display === "none"){
                sidebarHiddenCategories[0].style.display = "flex";
                showMoreText.innerHTML = "Show Less";
                showMoreIcon.style.display = "none";
                showLessIcon.style.display = "block";
            }
            else {
                sidebarHiddenCategories[0].style.display = "none";
                showMoreText.innerHTML = "Show More";
                showMoreIcon.style.display = "block";
                showLessIcon.style.display = "none";
            }
        }
        else { 
            var current1 = document.getElementsByClassName("selected");
            // console.log(current1);
            // var current2 = document.getElementsByClassName("selected-img");
            // console.log(current2);
            current1[0].className = current1[0].className.replace(" selected", "");
            // current2[0].className = current2[0].className.replace(" selected-img", "");
            this.className += " selected";    

            console.log(this);
        }
    });
}

// var sidebarImg = sidebar.getElementsByClassName("sidebar-category-sml");

// for (var i = 0; i < sidebarImg.length; i++) {
//     sidebarImg[i].addEventListener("click", function() {
//         var current = document.getElementsByClassName("selected-img");
//         console.log(current);
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " selected-img";
//     });
// }

var hamburgerBtnBox = document.querySelector(".guide-button-box");
var sidebarSmlItems = document.querySelector(".sidebar-category-sml");
var hr = document.querySelectorAll("hr");
var sidebarCategoriesSml = document.querySelector(".sidebar-categories-sml");

var screenWidth = window.screen.width * window.devicePixelRatio;

hamburgerBtnBox.addEventListener("click", open);

function open() {
    if(screenWidth >= 1330) {
        sidebar.classList.toggle("show-sidebar-sml");
    }
}

//SCROLLING NEXT

var nextBtn = document.querySelector(".next-btn");
// console.log(nextBtn);

nextBtn.addEventListener("click", scrollRight);

function scrollRight() {
    header.scrollBy(200, 0);
}

//VIDEO
