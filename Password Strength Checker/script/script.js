$( document ).ready(function() {
  
  const changeText = function (el, text, color) {
    el.text(text).css('color', color);
  };
  
  $('.input-1').keyup(function(){
    let len = this.value.length;
    var pass = this.value;
    const pbText = $('.form-1 .progress-bar_text');

    if (len === 0) {
      $('.form-1 .progress-bar_item').each(function() {
        $(this).removeClass('active')
      });
      $('.form-1 .active').css('background-color', 'transparent');
      changeText(pbText, 'Password is blank');
    } else if (len > 0 && len <= 4) {
      $('.form-1 .progress-bar_item-1').addClass('active');
      $('.form-1 .progress-bar_item-2').removeClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#FF4B47');
      changeText(pbText, 'Too weak');
    } else if (len > 4 && len <= 8) {
      $('.form-1 .progress-bar_item-2').addClass('active');
      $('.form-1 .progress-bar_item-3').removeClass('active');
      $('.form-1 .active').css('background-color', '#F9AE35');
      changeText(pbText, 'Could be stronger');
    } else {
      $('.form-1 .progress-bar_item').each(function() {
        $(this).addClass('active');
      });
      $('.form-1 .active').css('background-color', '#2DAF7D');
      changeText(pbText, 'Strong password');
    } 
  });
  
});
  

      

