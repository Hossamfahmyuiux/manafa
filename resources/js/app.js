/* || ===

= IMKAN.com.sa
= APP FIRE

=== || */


$(document).ready(function(){

         $('#menubtm').click(function(){
            $('.mobile-nav').toggleClass("active");
          });




                // about boards member
                $('.slide article').click(function(){
                  $(this).toggleClass("active");
                  $('body').toggleClass("no-scroll");
                  return false;
                });
                // about boards member

                $('.slider').slick({
                  dots: false,
                  slidesToShow: 4,
                  rtl: true,
                  slidesToScroll: 1,
                  arrows: true,
                  appendArrows: $("#arrows_2"),
                  prevArrow:"<a class='ic-icons-515 txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  nextArrow:"<a class='ic-icons-530  txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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


                $('.slider-en').slick({
                  dots: false,
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  arrows: true,
                  appendArrows: $("#arrows_2"),
                  prevArrow:"<a class='ic-icons-515 txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  nextArrow:"<a class='ic-icons-530  txt-sm txt-brand-hvr pointer right-mar-10 txt-black'></a>",
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
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

                          /* || SCROLLING EFFECT || */
                          new cbpScroller(document.getElementById("about-section"));
                          new cbpScroller(document.getElementById("portfolio-section"));
                          new cbpScroller(document.getElementById("investors-section"));
                          new cbpScroller(document.getElementById("contact-section"));


});


$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference


$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('#top-page').addClass('fixed');
    } else {
        $('#top-page').removeClass('fixed');
    }
});


// According list
    $('#about-section .box').click(function(){
        $('#about-section .box').removeClass("active");
        $(this).toggleClass("active");
    });
