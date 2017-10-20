$(document).ready(function() {

	// get the current window size
	var win = $(window).outerWidth(true);
	$(window).on('resize', function() { win = $(window).outerWidth(true); });

	// main navbar toggle system
	$('.nav-inner').on('click', '.brand a:last-child', function(e) {
		// check the window width is less then 992 or not
		if(win < 992) {
			var menu = $(".nav-wrapper").find(".menu");
			
			if($(menu).hasClass('open')) {
				$(menu).removeClass('open');
			} else {
				$(menu).addClass('open');
			}

			console.log('working!');
		}

		// neutralize the event
		e.preventDefault();
	});

	// main navbar dropdown system
	$('.nav-inner .menu').on('click', 'a', function(e) {
		// check the window width is less then 992 or not
		if(win < 992) {
			var li = $(this).closest('li');

			// check the item has any child list
			if(li.hasClass('dropdown')) {
				if(li.hasClass('open')) {
					li.removeClass('open');
				} else {
					li.addClass('open');
				}

				// neutralize the event
				e.preventDefault();
			}
		}
	});
});
