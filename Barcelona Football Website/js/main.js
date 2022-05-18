/*SCROLL TO ELEMENT*/

function scrollToElement(event, element, offset) {
  event.preventDefault();

  MobileSidebar.hide();

  var offsetHeight = 0;

  if (offset) {
    offsetHeight = StickyHeader.header.clientHeight;
  }

  $('html, body').animate(
    { scrollTop: $(element).offset().top - offsetHeight },
    800
  );
}

/*MOBILE SIDEBAR*/

var MobileSidebar = {
  sidebar: '',

  init: function() {
    MobileSidebar.sidebar = document.getElementById('mobileSidebar');
  },

  show: function() {
    var self = this;

    self.sidebar.style.display = 'block';
    document.body.classList.add('is-mobile-overlay-active');

    setTimeout(function() {
      self.sidebar.classList.add('show');
    }, 100);
  },

  hide: function() {
    var self = this;

    self.sidebar.classList.remove('show');

    setTimeout(function() {
      self.sidebar.style.display = '';
      document.body.classList.remove('is-mobile-overlay-active');
    }, 300);
  },
};

/*STICKY HEADER*/

var StickyHeader = {
  header: '',
  offsetTop: '',

  init: function() {
    var headerMain = document.getElementById('headerMain');

    StickyHeader.header = headerMain;
    StickyHeader.offsetTop = headerMain.offsetTop;
  },

  check: function() {
    if (window.pageYOffset >= this.offsetTop) {
      this.header.classList.add('sticky');
    } else {
      this.header.classList.remove('sticky');
    }
  },
};

/*INITIATIONS*/

MobileSidebar.init();
StickyHeader.init();

/*EVENT LISTENERS*/

window.onscroll = function windowOnScroll() {
  StickyHeader.check();
};
