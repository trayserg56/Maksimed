// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
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
