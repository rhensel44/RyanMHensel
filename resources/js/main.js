$(document).ready(function(){
        $('.carousel').slick({
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          arrows: false,
          draggable: false,
          pauseOnFocus: false,
          pauseOnHover: false
        });
      });

var amountScroll = 0;

$window.on('scroll', function() {
  var scrollVal = $(this).scrollTop();
});

if (scrollVal - amountScroll > 50) {
  var navHeight = $('navbar').css('height');
}

$('navbar').animate({top: '-' + navHeight}, 150);



      var prev = 0;
      var $window = $(window);
      var nav = $('.nav');

      $window.on('scroll', function(){
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
      });
