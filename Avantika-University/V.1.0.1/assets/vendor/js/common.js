// Slide animation to Bootstrap dropdown when it is being shown
	$('.dropdown').on('show.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        $('.nav-backdrop').show().css('opacity', '0.5');
        $('body').addClass('overflow-hidden');
	});
	$('.dropdown').on('hide.bs.dropdown', function() {
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        $('.nav-backdrop').hide().css('opacity', '0');
        $('body').removeClass('overflow-hidden');
	});
// Stop dropdown from closing on click inside
	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		  e.stopPropagation();
		});
	})
// Country Code selection	
	$(".country-code").intlTelInput({
		initialCountry: "in",
		separateDialCode: true,
	});

// Owl Carousel
    $('.banner-slider').owlCarousel({
        margin:10,
        nav:true,
        navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
        dots:true,
        dotData: true,
        dotsData: true,
        videoWidth: false,
        videoHeight: false,
        // autoHeight:true,
        video:true,
        center:true,
        merge:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    $('.mobile-bannerSlide').owlCarousel({
        margin:10,
        nav:true,
        navigation : false,
        dots:false,
        autoHeight:true,
        video:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })



    $('.school-courses').owlCarousel({
        margin:24,
        nav:true,
        navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1.25
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('.logoLeft').owlCarousel({
        loop:true,
        autoplay:true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2.1,
                margin:16
            },
            600:{
                items:3.5
            },
            1000:{
                items:5.5
            }
        }
    })
    $('.logoRight').owlCarousel({
        rtl: true,
        loop:true,
        autoplay:true,
        slideTransition: 'linear',
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        margin:30,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2.1,
                margin:16
            },
            600:{
                items:3.5
            },
            1000:{
                items:5.5
            }
        }
    })
    $('.best-placement').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:1.5
            },
            1000:{
                items:2
            }
        }
    })
    $('.latestNews').owlCarousel({
        margin:25,
        nav:true,
        navText:["<i class='icon-arrow-left'></i>","<i class='icon-arrow-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1.2
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.design').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.15
            },
            768:{
                items:1.1
            },
            1000:{
                items:2
            }
        }
    })

    $('.exDesign').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    $('.intership').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.1
            },
            600:{
                items:2
            },
            800:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })

    $('.aca-courses').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.25
            },
            600:{
                items:2
            },
            1000:{
                items:3
            },
            1200:{
                items:4
            }
        }
    })
    $('.achiv-list').owlCarousel({
        loop:false,
        margin:24,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.25
            },
            600:{
                items:2
            },
            1000:{
                items:2
            },
            1200:{
                items:3
            }
        }
    })
    $('.otCollection').owlCarousel({
        loop:false,
        margin:16,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1.1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

// Design Page JS




let overheight = $('.pOverview').height();
$('.apply-block').css('height', overheight);
let item = $('.item').height();
$('.item-video video').css('height', item);
let leadB = $('.ab-avantika').height() + 150;
$('.lead-banner img').css('height', leadB);
$('.lead-banner-mobile img').css('height', leadB);


// let process = $('.ac-process').height();
// console.log(process);
// $('.elegibility').css('height', process);


let dharam = $('.kaam-det').height();
$('.csh').css('height', dharam);



$(document).ready(function(){
  
    /* 1. Visualizing things on Hover - See next part for action on click */
    $('#stars li').on('mouseover', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
     
      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function(e){
        if (e < onStar) {
          $(this).addClass('hover');
        }
        else {
          $(this).removeClass('hover');
        }
      });
      
    }).on('mouseout', function(){
      $(this).parent().children('li.star').each(function(e){
        $(this).removeClass('hover');
      });
    });
    
    
    /* 2. Action to perform on click */
    $('#stars li').on('click', function(){
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');
      
      for (i = 0; i < stars.length; i++) {
        $(stars[i]).removeClass('selected');
      }
      
      for (i = 0; i < onStar; i++) {
        $(stars[i]).addClass('selected');
      }
      
      // JUST RESPONSE (Not needed)
      var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
      var msg = "";
      if (ratingValue > 1) {
          msg = "Thanks! You rated this " + ratingValue + " stars.";
      }
      else {
          msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
      }
      responseMessage(msg);
      
    });
    
    
  });
  
  
  function responseMessage(msg) {
    $('.success-box').fadeIn(200);  
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
  }







  $('#filters li').click(function(){
	var $filter = $(this).data('filter');
	if($filter != '*'){
		$('.filter-item').each(function(){
				if($(this).hasClass($filter)){
					showed($(this));
				}
				else{
					$(this).addClass('hidden');
				}
		});
	}
	else{
		$('.filter-item').each(function(){
			showed($(this));
		});
	}
	function showed($block){
			if($block.hasClass('hidden')){
				$block.removeClass('hidden');
			}
	}
    $('#filters li').removeClass('active');
    $(this).addClass('active');
});


