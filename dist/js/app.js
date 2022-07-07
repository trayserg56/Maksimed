// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
  // Popup
  	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});
		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});
	// Accardeon
	var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
	// Accardeon

	// Accardeon2
	var acc = document.getElementsByClassName("contacts__item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("activenew");

    /* Toggle between hiding and showing the active panel */
    var window = this.nextElementSibling;
    if (window.style.display === "block") {
		window.style.display = "none";
    } else {
		window.style.display = "block";
    }
  });
}
	// Accardeon2
	new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
	  new Swiper(".services__Swiper", {
		breakpoints: {
			100: {
                slidesPerView: 2.6,
            },
            420: {
                slidesPerView: 2.6,
            },
			768: {
                slidesPerView: 4.3,
            },
            1200: {
				spaceBetween: 25,
                slidesPerView: 5,
                slideToClickedSlide: true,
            }
        }
      });
	  
	  new Swiper(".TeamsSwiper", {
		slidesPerView: 5,
		spaceBetween: 25,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		  },
		  breakpoints: {
			100: {
                slidesPerView: 1.2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            420: {
                slidesPerView: 2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
            680: {
                slidesPerView: 2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
			768: {
                slidesPerView: 2.4,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 5,
                slideToClickedSlide: true,
            }
        }
      });
	  new Swiper(".NewsSwiper", {
		slidesPerView: 4.7,
		spaceBetween: 25,
		        pagination: {
		el: ".swiper-paginationnews",
		type: "progressbar",
        },
		  navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
		  breakpoints: {
			100: {
                slidesPerView: 1.2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            350: {
                slidesPerView: 1.2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
			450: {
                slidesPerView: 2.3,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            // when window width is >= 480px
            680: {
                slidesPerView: 2.7,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
			768: {
                slidesPerView: 3.2,
				spaceBetween: 10,
                slideToClickedSlide: true,
            },
            // when window width is >= 640px
            1200: {
                slidesPerView: 4.7,
                slideToClickedSlide: true,
            }
        }
      });
//Burger
$(".burger").click(function(){
	$(".burger__items").removeClass("none");
	$(".burger__items").addClass("block");
});
$(".burger__close").click(function(){
	$(".burger__items").removeClass("block");
	$(".burger__items").addClass("none");
});
$(".header__mobile__burger").click(function(){
	$(".header__mobile").addClass("nonemobile");
	$(".header__mobile__content").removeClass("nonemobile");
});
$(".header__mobile__close").click(function(){
	$(".header__mobile__content").addClass("nonemobile");
	$(".header__mobile").removeClass("nonemobile");
});
//Burger
      
})
