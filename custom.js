// <!-- Header Sticky  ------------------------------------------------------>
window.addEventListener("scroll", function () {
const header = document.getElementById("main-header");
	if (window.scrollY > 50) {
	  header.classList.add("sticky", "top-0", "bg-white", "shadow-md", "z-50");
	} else {
	  header.classList.remove("sticky", "top-0", "bg-white", "shadow-md", "z-50");
	}
});

// <!-- Preloader ------------------------------------->
$(window).on('load', function() {
	"use strict";
	var preloader = $('#loading'),
	loader = preloader.find('#loading-center');
	loader.fadeOut();
	preloader.delay(400).fadeOut('slow');			
});

// STYLE SWITCHER ------------------------------------->
const stlChanger = document.getElementById('stlChanger');
const chBut = document.querySelector('.chBut');
function showPanel() {
  stlChanger.style.right = '0px';
}
function hidePanel() {
  stlChanger.style.right = '-230px';
}
chBut.addEventListener('mouseenter', showPanel);
stlChanger.addEventListener('mouseenter', showPanel);
chBut.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!stlChanger.matches(':hover') && !chBut.matches(':hover')) {
      hidePanel();
    }
  }, 100);
});
stlChanger.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!stlChanger.matches(':hover') && !chBut.matches(':hover')) {
      hidePanel();
    }
  }, 100);
});

// <!-- Owl-Crousel ---------------------------------------------------------->
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    });
});	

// <!-- Video Popup ---------------------------------------------->
function openVideoPopup() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("videoFrame");
    iframe.src = "https://www.youtube.com/embed/SZEflIVnhH8?autoplay=1";
    popup.style.display = "flex";
}
function closeVideoPopup() {
    const popup = document.getElementById("videoPopup");
    const iframe = document.getElementById("videoFrame");
    iframe.src = ""; // Stop the video
    popup.style.display = "none";
}

// <!-- Counter ----------------------------------------------------------->
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count-element');
  	const animateCount = (el, target) => {
	    const isFloat = target.toString().includes('.');
	    let count = 0;
	    const speed = 80;
	    const step = target / speed;
	    const updateCount = () => {
	    	count += step;
	      	if (count < target) {
		        el.innerText = isFloat ? count.toFixed(2) : Math.floor(count);
		        requestAnimationFrame(updateCount);
		    } else {
		        el.innerText = isFloat ? target.toFixed(2) : target;
		        el.classList.add('counted');
	    	}
	    };
	    updateCount();
 	};
	const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
	    const el = entry.target;
	    if (!el.classList.contains('counted')) {
	      const target = parseFloat(el.getAttribute('data-target'));
	      animateCount(el, target);
	    }
	  }
	});
	}, {
   		threshold: 0.6
  	});
  	counters.forEach(counter => observer.observe(counter));
});

// <!-- Animations -------------------------------------------->
document.addEventListener("DOMContentLoaded", function () {
	const observer = new IntersectionObserver((entries, observer) => {
	  entries.forEach(entry => {
	    if (entry.isIntersecting) {
	      const el = entry.target;
	      const animation = el.getAttribute('data-animate');
	      el.classList.add(animation);
	      observer.unobserve(el); // Optional: remove if you want animation each time
	    }
	  });
	}, {
	  	threshold: 0.1 
	});
	document.querySelectorAll('.animate-on-scroll').forEach(el => {
	  observer.observe(el);
	});
});

// <!-- mobile-menu ------------------------------------------------------>
const menuButton = document.getElementById('mobile-menu-button');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
let menuOpen = false;
menuButton.addEventListener('click', () => {
menuOpen = !menuOpen;
    if (menuOpen) {
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    } else {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }
});

$("#mobile-menu-button").click(function() {
    $("header").toggleClass("open-menu");
});

$(document).ready(function () {
    $('.toggle-submenu').on('click', function () {
      $(this).next('.submenu').slideToggle();
      $(this).toggleClass('open');
    });
});

<!-- Mobile Menu Toggle Script -->

const btn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
if (btn && menu) {
    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
}

// <!-- Top-Popup ------------------------------------------------------>
document.addEventListener("DOMContentLoaded", function () {
	setTimeout(function () {
	  const modal = document.getElementById("modalpopup");
	  const modalContent = modal.querySelector(".modal-content");
	  modal.classList.add("show");
	  modalContent.classList.remove("fadeInDown");
	  void modalContent.offsetWidth;
	  modalContent.classList.add("fadeInDown");
	}, 6000);
	document.querySelectorAll('[data-dismiss="modal"]').forEach(btn => {
		btn.addEventListener("click", function () {
	    	document.getElementById("modalpopup").classList.remove("show");
	  	});
	});
});

// -----------------------------------------------------------------------------
	// Color Theme
// ----------------------------------------------------------------------------
const panel = document.getElementById("stlChanger");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", function (e) {
  e.preventDefault();
  panel.classList.toggle("open");
});
window.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("selectedTheme");
	if (savedTheme && savedTheme !== "none") {
		document.body.classList.add(savedTheme);
	}
});
function chooseStyle(theme) {
  const themes = [
    'skyblue-theme', 'pink-theme', 'purple-theme', 'violet-theme',
    'magenta-theme', 'crocus-theme', 'red-theme', 'green-theme'
  ];
  document.body.classList.remove(...themes);
  if (theme !== 'none') {
    document.body.classList.add(theme);
    	localStorage.setItem("selectedTheme", theme);
	} else {
		localStorage.removeItem("selectedTheme");
	}
}