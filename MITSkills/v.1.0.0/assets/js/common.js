// Global Js Start here

$(document).ready(function() {
	$(document).on("mousedown", ".btn-ripple" , function(e){     
		var target = e.target;
		var rect = target.getBoundingClientRect();
		var ripple = target.querySelector('.ripple');
		$(ripple).remove();
		ripple = document.createElement('span');
		ripple.className = 'ripple';
		ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
		target.appendChild(ripple);
		var top = e.pageY - rect.top - ripple.offsetHeight / 2 -  document.body.scrollTop;
		var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
		ripple.style.top = top + 'px';
		ripple.style.left = left + 'px';
		return false;
	});
});

//You can add your JS below here.............

	var sections = $('section'), nav = $('.app-features li'), nav_height = nav.outerHeight() + 70;
	$(window).on('scroll', function () {
		var cur_pos = $(this).scrollTop() + 1;
		sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
		if (cur_pos >= top && cur_pos <= bottom) {
			nav.find('a').removeClass('active');
			sections.removeClass('active');
			$(this).addClass('active');
			nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
		});
	});
	nav.find('a').on('click', function () {
		var $el = $(this), id = $el.attr('href');
		$('html, body').animate({
		scrollTop: $(id).offset().top - nav_height
		}, 100);
		return false;
	});

// setTimeout(function() { $(".final-announcement").slideUp(500); }, 5000)
// $('.final-announcement').slideDown(500);
$('.btclosed').click(function(){
	$(".final-announcement").slideUp(500);
});

 // Add slideDown animation to Bootstrap dropdown when expanding.
 $('.dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true);
  });

  // Add slideUp animation to Bootstrap dropdown when collapsing.
  $('.dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true);
  });

  $(".moretext").hide()
	$('.moreless-button').click(function() {
		$('.moretext').slideToggle();
		if ($('.moreless-button').text() == "Read more") {
		$(this).text("Read less")
		} else {
		$(this).text("Read more")
		}
	});


	// $(".ds-hd-right>li").on("show.bs.dropdown", function (e) {
	// 	$(this).find(".dropdown-menu").first().stop(true, true).show();
	// });
	// $(".ds-hd-right>li").on("hide.bs.dropdown", function (e) {
	// 	$(this).find(".dropdown-menu").first().stop(true, true).hide();
	// });

	document.querySelectorAll('.dropdown-menu').forEach(function(element){
		element.addEventListener('click', function (e) {
		  e.stopPropagation();
		});
	})