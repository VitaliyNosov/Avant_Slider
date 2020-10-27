document.addEventListener("DOMContentLoaded", function() {

    // slider

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        focusOnSelect: true
      });

    // popup

    $(".item").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
});
