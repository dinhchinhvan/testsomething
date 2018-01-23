
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });

  	/*====================================
    CounterUp
    ======================================*/	

	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
					delay: 10, // the delay time in ms
			time: 1000 // the speed time in ms
			});
		}
	});
	
  	/*====================================
    Pretty Photo
    ======================================*/
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

}());


}
$(document).ready(function(){
  $(".btn-open-popup").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $("#btn-close").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus = 0; // set value

  function loadPopup() {
    if(popupStatus == 0) { // if value is 0, show popup
      $("#to-popup1").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus == 1) { // if value is 1, close popup
      $("#to-popup1").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".btn-open-popup2").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup2").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus2 = 0; // set value

  function loadPopup() {
    if(popupStatus2 == 0) { // if value is 0, show popup
      $("#to-popup2").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus2 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus2 == 1) { // if value is 1, close popup
      $("#to-popup2").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus2 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".btn-open-popup3").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup3").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus3 = 0; // set value

  function loadPopup() {
    if(popupStatus3 == 0) { // if value is 0, show popup
      $("#to-popup3").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus3 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus3 == 1) { // if value is 1, close popup
      $("#to-popup3").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus3 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".btn-open-popup4").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup4").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus4 = 0; // set value

  function loadPopup() {
    if(popupStatus4 == 0) { // if value is 0, show popup
      $("#to-popup4").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus4 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus4 == 1) { // if value is 1, close popup
      $("#to-popup4").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus4 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".btn-open-popup5").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup5").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus5 = 0; // set value

  function loadPopup() {
    if(popupStatus5 == 0) { // if value is 0, show popup
      $("#to-popup5").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus5 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus5 == 1) { // if value is 1, close popup
      $("#to-popup5").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus5 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".btn-open-popup6").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup6").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus6 = 0; // set value

  function loadPopup() {
    if(popupStatus6 == 0) { // if value is 0, show popup
      $("#to-popup6").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus6 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus6 == 1) { // if value is 1, close popup
      $("#to-popup6").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus6 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".popupmisson").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup7").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus7 = 0; // set value

  function loadPopup() {
    if(popupStatus7 == 0) { // if value is 0, show popup
      $("#to-popup7").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus7 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus7 == 1) { // if value is 1, close popup
      $("#to-popup7").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus7 = 0;  // and set value to 0
    }
  }
});
$(document).ready(function(){
  $(".whyus").click(function(even) {
    even.preventDefault(); // không truy cập đến link trong thẻ a
    loadPopup(); // function show popup
  });

  $(".closepopup8").click(function(){
    disablePopup();
  });

  $(this).keydown(function(event) {
    if (event.which == 27) { // 27 is 'Ecs' in the keyboard
      disablePopup();  // function close pop up
    }
  });

    $("#background-popup").click(function() {
    disablePopup();  // function close pop up
    disableLoginPopup();
  });

  var popupStatus8 = 0; // set value

  function loadPopup() {
    if(popupStatus8 == 0) { // if value is 0, show popup
      $("#to-popup8").fadeIn(200); // fadein popup div
      $("#background-popup").css("opacity", "0.8"); // css opacity, supports IE7, IE8
      $("#background-popup").fadeIn(200);
      popupStatus8 = 1; // and set value to 1
    }
    changeimg1();
  }
  function disablePopup() {
    if(popupStatus8 == 1) { // if value is 1, close popup
      $("#to-popup8").fadeOut(300);
      $("#background-popup").fadeOut(300);
      $('body,html').css("overflow","auto");//enable scroll bar
      popupStatus8 = 0;  // and set value to 0
    }
  }
});

 function changeimg1(){
     $(".imagebottom .iconimg1").click(function(){
    $(".imageleft .img1").css("display","block");
    $(".imageleft .img2").css("display","none");
    $(".imageleft .img3").css("display","none");
  })
  $(".imagebottom .iconimg2").click(function(){
    $(".imageleft .img2").css("display","block");
    $(".imageleft .img1").css("display","none");
    $(".imageleft .img3").css("display","none");
  })
  $(".imagebottom .iconimg3").click(function(){
    $(".imageleft .img3").css("display","block");
    $(".imageleft .img1").css("display","none");
    $(".imageleft .img2").css("display","none");
  })
  }
main();