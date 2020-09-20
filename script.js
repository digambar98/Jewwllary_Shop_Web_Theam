<!------------------------Index-------------------------------------->
$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});

(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    new WOW().init();
    
    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });
    $('#collapsingNavbar li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggler:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));
    });

})(jQuery);


var searchClick = function() {
    var text = document.getElementById("text-form").value;
    // alert(text);
    window.location.href = "#brands" + text;
}


<!-----------------------------end------------------------------------>

<!-----------------------------product-------------------------------->
$(document).ready(function () {
            $(document).on("scroll", onScroll);
            //smoothscroll
            $('.navbar-nav li a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");
                $('.navbar-nav li a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
                var target = this.hash
                    , menu = target;
                target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': target.offset().top + 2
                }, 1000, 'swing', function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.navbar-nav li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav li a').removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            });
        }
<!------------------------------end----------------------------------->
<!----------------------------Aboutus---------------------------------->
 $(document).ready(function () {
            $(document).on("scroll", onScroll);
            //smoothscroll
            $('.navbar-nav li a[href^="#"]').on('click', function (e) {
                e.preventDefault();
                $(document).off("scroll");
                $('.navbar-nav li a').each(function () {
                    $(this).removeClass('active');
                })
                $(this).addClass('active');
                var target = this.hash
                    , menu = target;
                target = $(target);
                $('html, body').stop().animate({
                    'scrollTop': target.offset().top + 2
                }, 1000, 'swing', function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                });
            });
        });

        function onScroll(event) {
            var scrollPos = $(document).scrollTop();
            $('.navbar-nav li a').each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav li a').removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            });
        }
<!--------------------------------end--------------------------------------->
<!----------------------------Prod-details---------------------------------->
$(document).ready(function() {
 
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');
 
      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });
 
});
<!-----------------------------end--------------------------------------------->
<!-------------------------------checkout-------------------------------------->

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)
}())
<!--------------------------------end------------------------------------------------>