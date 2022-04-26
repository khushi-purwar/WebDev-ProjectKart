$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

let courses = document.querySelector(".courseItems");
courses.addEventListener("click", coursesSite);

function coursesSite() {

  window.location.href = "learning.html";
}

let plans = document.getElementById("viewPlans");

plans.addEventListener("click", viewPlans);

let plan = document.querySelector(".viewPlans");

plan.addEventListener("click", viewPlans);

function viewPlans() {
  window.location.href = "plans.html";
}

let tryBtn = document.getElementById("tryForFree");
tryBtn.addEventListener("click", tryFree);

function tryFree() {
  window.location.href = "/free-try.html";
}

let colab = document.getElementById("howTheyDoing");

colab.addEventListener("click", () => {
  window.location.href = "colab.html"
})