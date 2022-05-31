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
  // Popup
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
	var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
	  var swiper = new Swiper(".TeamsSwiper", {
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
      });
	  var swiper = new Swiper(".NewsSwiper", {
		slidesPerView: 4.7,
		spaceBetween: 25,
		        pagination: {
          el: ".swiper-kolvo",
          type: "fraction",
        },
		// pagination: {
		// 	el: ".swiper-pagination",
		// 	type: "progressbar",
		//   },
		  navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		  },
      });

      
})
