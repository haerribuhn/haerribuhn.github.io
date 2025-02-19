function parallax() {
	var scrollPosition = $(window).scrollTop();
	$('#parallax').css('top',(0 - (scrollPosition * 0.3))+'px' ); // bg image moves at 30% of scrolling speed
	$('#hero').css('opacity',((100 - scrollPosition/2) *0.01));
}
$(document).ready(function() {

	/*	Parallax Background
	================================================== */

	$(window).on('scroll', function(e) {
		parallax();
	});

	/*	Local Scroll
	================================================== */


	/*	Active Menu
	================================================== */
	$("nav a").click(function(e) {
	    e.preventDefault();
	    var aid = $(this).attr("href");
	    $('html,body').animate({scrollTop: $(aid).offset().top - 80 },'slow');
	});

	jQuery(function() {
		var sections = jQuery('section');
		var navigation_links = jQuery('nav a');
		sections.waypoint({
		handler: function(direction) {
			var active_section;
			active_section = jQuery(this);
			if (direction === "up") active_section = active_section.prev();
			var active_link = jQuery('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.parent().removeClass("active");
			active_link.parent().addClass("active");
			active_section.addClass("active-section");
		},
		offset: '35%'
		});
	});

	/*	Animation with Waypoints
	================================================== */

	/*	OWL Carousel
	================================================== */

  $("#owl-referenzen").owlCarousel({
	  autoPlay : 4000,
      navigation : false,
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

  });

	/*	Bootstrap Carousel
	================================================== */

	jQuery('.carousel').carousel()


	/* Contact Form Ajax
	================================================== */
	 $("#close").click(function(){
		$("#formsuccess").modal("hide");
	 });
	 $.validator.setDefaults({
		submitHandler: function() {
			$.ajax({
			  type: "POST",
			  url: "server.php",
			  data: $(".contact-us").serialize()
			}).done(function() {
				$("#formsuccess").modal("show");
				$(".contact-us").trigger("reset");
				$(".form-control").removeClass( "valid");
			});
		}
	 });
	 $('.contact-us').validate(
	 {
	  rules: {
		fname: {
		  required: true
		},
		lname: {
		  required: true
		},
		email: {
		  required: true,
		  email: true
		},
		phone: {
		  required: true,
		  digits: true
		},
		message: {
		  required: true,
		  maxlength: 200
		}
	  },

	 });
 });
