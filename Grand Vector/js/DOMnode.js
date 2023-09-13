// domnode
let searchIcon = document.getElementById("search");
let searchBar = document.querySelector("input[type = search]");
let nav = document.querySelector("nav");
let bar = document.getElementById("bar");
let body = document.querySelector("body");
let barIcon = document.getElementById("barIcon");
let uls = document.querySelectorAll("li > ul");
let lis = document.querySelectorAll("ul.navUl > li");
let spans = document.querySelectorAll("ul.navUl > li  > span");
let ls = [...lis].slice(1, lis.length);
let height =window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let icondiv = document.getElementById("icons").firstChild;
let icons = document.querySelectorAll("#icons > i");
let width =
window.innerWidth ||
document.documentElement.clientWidth ||
document.body.clientWidth;
let navbar = document.getElementsByClassName("navbar")[0];
let navi = document.getElementsByClassName("navi")[0];
let navposition = navbar.offsetTop;

// function
function hideBar() {
  let result = [...searchBar.classList].find(
    (element) => element == "invisible"
  );
  if (result) {
    searchBar.classList.remove("invisible");
    searchBar.classList.remove("d-none");
    searchIcon.classList.remove("fa-search");
    searchIcon.classList.add("fa-times");
  } else {
    searchBar.classList.add("invisible");
    searchBar.classList.add("d-none");
    searchIcon.classList.add("fa-search");
    searchIcon.classList.remove("fa-times");
  }
}

function show() {
  let found = [...barIcon.classList].find((element) => element == "fa-bars");
  if (found) {
    nav.classList.remove("d-none");
    barIcon.classList.remove("fa-bars");
    barIcon.classList.add("fa-arrow-left");
    barIcon.classList.add("transition");
  } else {
    nav.classList.add("d-none");
    barIcon.classList.add("fa-bars");
    barIcon.classList.remove("fa-arrow-left");
  }
}

function showMenuMobile(e) {
  let li = e.target.parentElement;
  let found = [...li.querySelector("ul").classList].includes("d-none");
  uls.forEach((ul) => ul.classList.add("d-none", "invisible"));
  ls.forEach((li) => li.querySelector("span").classList.remove("bg-green"));
  if (found) {

    li.querySelector("ul").classList.remove("d-none");
    li.querySelector("ul").classList.remove("invisible");
    li.querySelector("ul").classList.add("animate__animated");
    li.querySelector("ul").classList.add("animate__fadeInLeftBig");

    li.querySelector("span").classList.add("bg-green");
  } else {
    li.querySelector("ul").classList.add("d-none");
    li.querySelector("ul").classList.add("invisible");
    li.querySelector("span").classList.remove("bg-green");
    li.querySelector("ul").classList.remove("animate__animated");
    li.querySelector("ul").classList.remove("animate__fadeInLeftBig");

  }
}

function showMenuTablet(e) {
  let li = e.target.parentElement;
  let found = [...li.querySelector("ul").classList].includes("d-none");
  uls.forEach((ul) => ul.classList.add("d-none", "invisible"));
  ls.forEach((li) => li.querySelector("span").classList.remove("bg-green"));
  ls.forEach((li) => li.querySelector("span").classList.remove("text-shadow"));

  if (found) {
    li.querySelector("ul").classList.remove("d-none");
    li.querySelector("ul").classList.remove("invisible");
    li.querySelector("span").classList.add("text-shadow");


  } else {
    li.querySelector("ul").classList.add("d-none");
    li.querySelector("ul").classList.add("invisible");
    li.querySelector("span").classList.remove("text-shadow");

  }
}

function fixnav(){
  if (window.scrollY >= 135) {
    navbar.classList.add("fixednav","position-fixed", "h-auto");
    navbar.classList.remove("position-absolute");
    navi.classList.add("my-3", "mx-auto", "h-auto");
    // navi.classList.remove("my-1");


  } else {
    navbar.classList.remove("fixednav","position-fixed", "h-auto");
    navbar.classList.add("position-absolute");
    navi.classList.remove("my-3", "mx-auto", "h-auto");

    // navbar.classList.remove("fixednav","position-fixed");
    // navbar.classList.add("position-absolute")

  }
}




// events
searchIcon.addEventListener("click", hideBar);
bar.addEventListener("click", show);
window.addEventListener("scroll", fixnav);
ls.forEach((li) =>
  li.addEventListener("click", function (e) {
    e.preventDefault()
    ls.forEach((li) => li.querySelector("span").classList.remove("bg-green"));
    ls.forEach((li) => li.querySelector("span").classList.remove("text-shadow"));
    ls.forEach(li =>  li.querySelector("ul").classList.remove("animate__fadeInLeftBig"));

   
    if (width < 767) {
      showMenuMobile(e);
    } else if (width > 768 && width < 991) {
      showMenuTablet(e);
    }

    
  })
);

// swipper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})();



(function () {
  "use strict";

  var carousels = function () {
    $(".owl-carousel1").owlCarousel({
      loop: true,
      center: true,
      margin: 10,
      responsiveClass: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
          nav: false
        },
        680: {
          items: 2,
          nav: false,
          loop: false
        },
        1000: {
          items: 3,
          nav: true
        }
      }
    });
  };

  (function ($) {
    carousels();
  })(jQuery);
})(); 