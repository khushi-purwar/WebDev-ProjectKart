function placed(){
	document.getElementById("success-message").style.display = "block";
}

//carousel
$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
  {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: false,
    dots: false,
    arrows:false
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
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
  ]
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'
 
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

$('.card-header').on('click', function() {
  if($(this).hasClass('footer-accordion-open')) {
    $(this).removeClass('footer-accordion-open');
    $('.fa-chevron-down', this).removeClass('rotate-icon');
  }
  else {
    $(this).addClass('footer-accordion-open');
    $('.fa-chevron-down', this).addClass('rotate-icon');
  }
})
