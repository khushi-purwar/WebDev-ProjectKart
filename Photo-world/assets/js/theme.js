// Custom theme code

if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
