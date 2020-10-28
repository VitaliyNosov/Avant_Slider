document.addEventListener("DOMContentLoaded", function() {

    // slider

    $('.single-item').slick({
      nextArrow: document.querySelector('#my-arrow-next'),
      prevArrow: document.querySelector('#my-arrow-prev') 
    });

    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      arrows: true,
      nextArrow: document.querySelector('#my-arrow-next-two'),
      prevArrow: document.querySelector('#my-arrow-prev-two') 
    });

    // popup

    $(".item").magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
	
});
