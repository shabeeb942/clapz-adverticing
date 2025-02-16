/***************************************************
==================== JS INDEX ======================
****************************************************
PreLoader Js
Mobile Menu Js
sidebar - cart
Search Js
Menu Show Hide Js
Data Background Js
Nice Select Js
settings append in body
settings open btn
Mouse Custom Cursor
rtl settings
color settings
header language Js
Banner Slider Js
Team Active js
testimonial active js
Brand Active Js
project js
product isotope js
news active js
news related post js
magnificPopup img view
magnificPopup video view
Wow Js
Data width Js
Cart Quantity Js
Counter Js
range slider activation
Product Slider Js
side - info
about zoom js 
Tilt js
Banner Video 

****************************************************/

(function ($) {
  ("use strict");

  ////////////////////////////////////////////////////
  // PreLoader Js
  function loader() {
    $(window).on('load', function () {
      $('#ctn-preloader').addClass('loaded');
      $("#loading").fadeOut(500);

      if ($('#ctn-preloader').hasClass('loaded')) {
        $('#preloader').delay(900).queue(function () {
          $(this).remove();
        });
      }
    });
  }
  loader();

  ////////////////////////////////////////////////////
  // Mobile Menu Js
  $("#mobile-menu").meanmenu({
    meanMenuContainer: ".mobile-menu",
    meanScreenWidth: "1199",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  $("#mobile-menu2").meanmenu({
    meanMenuContainer: ".mobile-menu2",
    meanScreenWidth: "3000",
    meanExpand: ['<i class="fal fa-plus"></i>'],
  });

  // sidebar - cart
  $(".close-sidebar,.offcanvas-overlay").on("click", function () {
    $(".sidebar-cart").removeClass("cart-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });

  $(".action-item-cart").on("click", function () {
    $(".sidebar-cart").addClass("cart-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  ////////////////////////////////////////////////////
  // Search Js
  $(".cp-search-btn").on("click", function () {
    $(".search__popup").addClass("search-opened");
  });

  $(".search-close-btn, .offcanvas-overlay").on("click", function () {
    $(".search__popup").removeClass("search-opened");
  });

  ////////////////////////////////////////////////////
  // Menu Show Hide Js
  var lastScrollTop = 300;
  $(window).scroll(function (event) {
    var scroll = $(this).scrollTop();
    if (scroll > lastScrollTop) {
      $('#menu-show-hide').removeClass('cp-sticky');
    } else {
      $('#menu-show-hide').addClass('cp-sticky');
    }

    if (scroll < 300) {
      $("#menu-show-hide").removeClass("cp-sticky");
    }
    lastScrollTop = scroll;
  });

  ////////////////////////////////////////////////////
  // Data Background Js
  $("[data-background").each(function () {
    $(this).css(
      "background-image",
      "url( " + $(this).attr("data-background") + "  )"
    );
  });

  ////////////////////////////////////////////////////
  // Nice Select Js
  $("select").niceSelect();

  ////////////////////////////////////////////////////
  // // settings append in body
  // function tp_settings_append($x) {
  //   var settings = $("body");
  //   let dark;
  //   $x == true ? (dark = "d-block") : (dark = "d-none");
  //   var settings_html = `<div class="tp-theme-settings-area transition-3">
	// 	<div class="tp-theme-wrapper">
	// 	   <div class="tp-theme-header text-center">
	// 		  <h4 class="tp-theme-header-title">Theme Settings</h4>
	// 	   </div>

		  //  <!-- THEME TOGGLER -->
		  //  <div class="tp-theme-toggle mb-20 ${dark}" style="display:none">
			//   <label class="tp-theme-toggle-main" for="tp-theme-toggler">
			// 	 <span class="tp-theme-toggle-dark"><i class="fa-light fa-moon"></i> Dark</span>
			// 		<input type="checkbox" id="tp-theme-toggler">
			// 		<i class="tp-theme-toggle-slide"></i>
			// 	 <span class="tp-theme-toggle-light active"><i class="fa-light fa-sun-bright"></i> Light</span>
			//   </label>
		  //  </div>

		  //  <!--  RTL SETTINGS -->
		  //  <div class="tp-theme-dir mb-20">
			//   <label class="tp-theme-dir-main" for="tp-dir-toggler">
			// 	 <span class="tp-theme-dir-rtl"> RTL</span>
			// 		<input type="checkbox" id="tp-dir-toggler">
			// 		<i class="tp-theme-dir-slide"></i>
			// 	 <span class="tp-theme-dir-ltr active"> LTR</span>
			//   </label>
		  //  </div>

	// 	   <!-- COLOR SETTINGS -->
	// 	   <div class="tp-theme-settings">
	// 		  <div class="tp-theme-settings-wrapper">
	// 			 <div class="tp-theme-settings-open">
	// 				<button class="tp-theme-settings-open-btn">
	// 				   <span class="tp-theme-settings-gear">
	// 					  <i class="fal fa-cog"></i>
	// 				   </span>
	// 				   <span class="tp-theme-settings-close">
	// 					  <i class="fal fa-times"></i>
	// 				   </span>
	// 				</button>
	// 			 </div>
	// 			 <div class="row row-cols-4 gy-2 gx-2">
	// 				<div class="col">
	// 				   <div class="tp-theme-color-item tp-color-active">
	// 				   <button class="tp-theme-color-btn tp-color-settings-btn d-none" data-color-default="#FF3737" type="button" data-color="#FF3737"></button>
	// 					  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FF3737"></button>
	// 				   </div>
	// 				</div>
	// 				<div class="col">
	// 				   <div class="tp-theme-color-item tp-color-active">
	// 					  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#FBD017"></button>
	// 				   </div>
	// 				</div>
	// 				<div class="col">
	// 				   <div class="tp-theme-color-item tp-color-active">
	// 					  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#138c17"></button>
	// 				   </div>
	// 				</div>
	// 				<div class="col">
	// 				   <div class="tp-theme-color-item tp-color-active">
	// 					  <button class="tp-theme-color-btn tp-color-settings-btn" type="button" data-color="#73c100"></button>
	// 				   </div>
	// 				</div>
	// 			 </div>
	// 		  </div>
	// 		  <div class="tp-theme-color-input">
	// 			 <h6>Choose Custom Color</h6>
	// 			 <input type="color" id="tp-color-setings-input" value="#0b3d2c">
	// 			 <label id="tp-theme-color-label" for="tp-color-setings-input"></label>
	// 		  </div>
	// 	   </div>
	// 	</div>
	//  </div>`;

  //   settings.append(settings_html);
  // }
  // tp_settings_append(false); // if want to enable dark light mode then send "true";

  // settings open btn
  $(".tp-theme-settings-open-btn").on("click", function () {
    $(".tp-theme-settings-area").toggleClass("settings-opened");
  });

  $(".slider-drag").on("mouseenter", function () {
    $(".mouseCursor").addClass("cursor-big");
  });
  $(".slider-drag").on("mouseleave", function () {
    $(".mouseCursor").removeClass("cursor-big");
  });

  $("a,.sub-menu").on("mouseenter", function () {
    $(".mouseCursor").addClass("d-none");
  });
  $("a,.sub-menu").on("mouseleave", function () {
    $(".mouseCursor").removeClass("d-none");
  });

  ////////////////////////////////////////////////////
  // Mouse Custom Cursor
  function itCursor() {
    var myCursor = jQuery(".mouseCursor");
    if (myCursor.length) {
      if ($("body")) {
        const e = document.querySelector(".cursor-inner"),
          t = document.querySelector(".cursor-outer");
        let n,
          i = 0,
          o = !1;
        (window.onmousemove = function (s) {
          o ||
            (t.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (e.style.transform =
              "translate(" + s.clientX + "px, " + s.clientY + "px)"),
            (n = s.clientY),
            (i = s.clientX);
        }),
          $("body").on("mouseenter", "button, a, .cursor-pointer", function () {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
          }),
          $("body").on("mouseleave", "button, a, .cursor-pointer", function () {
            ($(this).is("a", "button") &&
              $(this).closest(".cursor-pointer").length) ||
              (e.classList.remove("cursor-hover"),
                t.classList.remove("cursor-hover"));
          }),
          (e.style.visibility = "visible"),
          (t.style.visibility = "visible");
      }
    }
  }
  itCursor();

  ////////////////////////////////////////////////////
  // rtl settings
  function tp_rtl_settings() {
    $("#tp-dir-toggler").on("change", function () {
      toggle_rtl();
      window.location.reload();
    });

    // set toggle theme scheme
    function tp_set_scheme(tp_dir) {
      localStorage.setItem("tp_dir", tp_dir);
      document.documentElement.setAttribute("dir", tp_dir);

      if (tp_dir === "rtl") {
        var list = $("[href='assets/css/bootstrap.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
      } else {
        var list = $("[href='assets/css/bootstrap.css']");
        $(list).attr("href", "assets/css/bootstrap.css");
      }
    }

    // toogle theme scheme
    function toggle_rtl() {
      if (localStorage.getItem("tp_dir") === "rtl") {
        tp_set_scheme("ltr");
        var list = $("[href='assets/css/bootstrap.rtl.css']");
        $(list).attr("href", "assets/css/bootstrap.css");
      } else {
        tp_set_scheme("rtl");
        var list = $("[href='assets/css/bootstrap.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
      }
    }

    // set the first theme scheme
    function tp_init_dir() {
      if (localStorage.getItem("tp_dir") === "rtl") {
        tp_set_scheme("rtl");
        var list = $("[href='assets/css/bootstrap.css']");
        $(list).attr("href", "assets/css/bootstrap.rtl.css");
        document.getElementById("tp-dir-toggler").checked = true;
      } else {
        tp_set_scheme("ltr");
        document.getElementById("tp-dir-toggler").checked = false;
        var list = $("[href='assets/css/bootstrap.css']");
        $(list).attr("href", "assets/css/bootstrap.css");
      }
    }
    tp_init_dir();
  }
  if ($("#tp-dir-toggler").length > 0) {
    tp_rtl_settings();
  }

  var tp_rtl = localStorage.getItem("tp_dir");
  let rtl_setting = tp_rtl == "rtl" ? true : false;

  // dark light mode toggler
  function tp_theme_toggler() {
    $("#tp-theme-toggler").on("change", function () {
      toggleTheme();
    });

    // set toggle theme scheme
    function tp_set_scheme(tp_theme) {
      localStorage.setItem("tp_theme_scheme", tp_theme);
      document.documentElement.setAttribute("tp-theme", tp_theme);
    }

    // toogle theme scheme
    function toggleTheme() {
      if (localStorage.getItem("tp_theme_scheme") === "tp-theme-dark") {
        tp_set_scheme("tp-theme-light");
      } else {
        tp_set_scheme("tp-theme-dark");
      }
    }

    // set the first theme scheme
    function tp_init_theme() {
      if (localStorage.getItem("tp_theme_scheme") === "tp-theme-dark") {
        tp_set_scheme("tp-theme-dark");
        document.getElementById("tp-theme-toggler").checked = true;
      } else {
        tp_set_scheme("tp-theme-light");
        document.getElementById("tp-theme-toggler").checked = false;
      }
    }
    tp_init_theme();
  }
  if ($("#tp-theme-toggler").length > 0) {
    tp_theme_toggler();
  }

  // color settings
  function tp_color_settings() {
    // set color scheme
    function tp_set_color(tp_color_scheme) {
      localStorage.setItem("tp_color_scheme", tp_color_scheme);
      document
        .querySelector(":root")
        .style.setProperty("--clr-theme-1", tp_color_scheme);
      document.getElementById("tp-color-setings-input").value = tp_color_scheme;
      document.getElementById("tp-theme-color-label").style.backgroundColor =
        tp_color_scheme;
    }

    // set color
    function tp_set_input() {
      var color = localStorage.getItem("tp_color_scheme");
      document.getElementById("tp-color-setings-input").value = color;
      document.getElementById("tp-theme-color-label").style.backgroundColor =
        color;
    }
    tp_set_input();

    function tp_init_color() {
      var defaultColor = $(".tp-color-settings-btn").attr("data-color-default");
      var setColor = localStorage.getItem("tp_color_scheme");

      if (setColor != null) {
      } else {
        setColor = defaultColor;
      }

      if (defaultColor !== setColor) {
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", setColor);
        document.getElementById("tp-color-setings-input").value = setColor;
        document.getElementById("tp-theme-color-label").style.backgroundColor =
          setColor;
        tp_set_color(setColor);
      } else {
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", defaultColor);
        document.getElementById("tp-color-setings-input").value = defaultColor;
        document.getElementById("tp-theme-color-label").style.backgroundColor =
          defaultColor;
        tp_set_color(defaultColor);
      }
    }
    tp_init_color();

    let themeButtons = document.querySelectorAll(".tp-color-settings-btn");

    themeButtons.forEach((color) => {
      color.addEventListener("click", () => {
        let datacolor = color.getAttribute("data-color");
        document
          .querySelector(":root")
          .style.setProperty("--clr-theme-1", datacolor);
        document.getElementById("tp-theme-color-label").style.backgroundColor =
          datacolor;
        tp_set_color(datacolor);
      });
    });

    const colorInput = document.querySelector("#tp-color-setings-input");
    const colorVariable = "--clr-theme-1";

    colorInput.addEventListener("change", function (e) {
      var clr = e.target.value;
      document.documentElement.style.setProperty(colorVariable, clr);
      tp_set_color(clr);
      tp_set_check(clr);
    });

    function tp_set_check(clr) {
      const arr = Array.from(document.querySelectorAll("[data-color]"));

      var a = localStorage.getItem("tp_color_scheme");

      let test = arr
        .map((color) => {
          let datacolor = color.getAttribute("data-color");

          return datacolor;
        })
        .filter((color) => color == a);

      var arrLength = test.length;

      if (arrLength == 0) {
        $(".tp-color-active").removeClass("active");
      } else {
        $(".tp-color-active").addClass("active");
      }
    }

    function tp_check_color() {
      var a = localStorage.getItem("tp_color_scheme");

      var list = $(`[data-color="${a}"]`);

      list
        .parent()
        .addClass("active")
        .parent()
        .siblings()
        .find(".tp-color-active")
        .removeClass("active");
    }
    tp_check_color();

    $(".tp-color-active").on("click", function () {
      $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find(".tp-color-active")
        .removeClass("active");
    });
  }
  if (
    $(".tp-color-settings-btn").length > 0 &&
    $("#tp-color-setings-input").length > 0 &&
    $("#tp-theme-color-label").length > 0
  ) {
    tp_color_settings();
  }


  ////////////////////////////////////////////////////
  // header language Js
  if ($("#cp-header-lang-toggle").length > 0) {
    window.addEventListener('click', function (e) {
      if (document.getElementById('cp-header-lang-toggle').contains(e.target)) {
        $(".cp-lang-list").toggleClass("cp-lang-list-open");
      }
      else {
        $(".cp-lang-list").removeClass("cp-lang-list-open");
      }
    });
  }


  ////////////////////////////////////////////////////
  // Banner Slider Js
  if (jQuery(".cp-banner2-active").length > 0) {
    let sliderActive1 = ".cp-banner2-active";
    let sliderInit1 = new Swiper(sliderActive1, {
      // Optional parameters
      slidesPerView: 1,
      slidesPerColumn: 1,
      paginationClickable: true,
      loop: true,
      effect: "fade",
      rtl: rtl_setting,
      autoplay: {
        delay: 50000000,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".cp-banner2-button-next",
        prevEl: ".cp-banner2-button-prev",
      },

      a11y: false,
    });

    function animated_swiper(selector, init) {
      let animated = function animated() {
        $(selector + " [data-animation]").each(function () {
          let anim = $(this).data("animation");
          let delay = $(this).data("delay");
          let duration = $(this).data("duration");

          $(this)
            .removeClass("anim" + anim)
            .addClass(anim + " animated")
            .css({
              webkitAnimationDelay: delay,
              animationDelay: delay,
              webkitAnimationDuration: duration,
              animationDuration: duration,
            })
            .one(
              "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
              function () {
                $(this).removeClass(anim + " animated");
              }
            );
        });
      };
      animated();
      // Make animated when slide change
      init.on("slideChange", function () {
        $(sliderActive1 + " [data-animation]").removeClass("animated");
      });
      init.on("slideChange", animated);
    }

    animated_swiper(sliderActive1, sliderInit1);
  }


  ////////////////////////////////////////////////////
  // service3 Active js
  var cpService3 = new Swiper(".cp-service3-active", {
    spaceBetween: 30,
    slidesPerView: 5,
    roundLengths: true,
    centeredSlides: true,
    loop: true,
    rtl: rtl_setting,
    autoplay: true,
    mousewheel: {
      releaseOnEdges: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.cp-service3-button-next',
      prevEl: '.cp-service3-button-prev',
    },
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });


  ////////////////////////////////////////////////////
  // Team Active js 
  var cpTeam = new Swiper(".cp-team-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerView: 5,
    loop: false,
    rtl: rtl_setting,
    mousewheel: {
      releaseOnEdges: true,
    },
    breakpoints: {
      1600: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });


  ////////////////////////////////////////////////////
  // testimonial active js
  const testimonial = new Swiper('.cp-testimonial-active', {
    // Optional parameters
    loop: false,
    slidesPerView: 1,
    rtl: rtl_setting,
    mousewheel: {
      releaseOnEdges: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.cp-testimonial-button-next',
      prevEl: '.cp-testimonial-button-prev',
    },
  });

  var cpTestimonial = new Swiper(".cp-testimonial2-active", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    navigation: {
      nextEl: '.cp-testimonial2-button-next',
      prevEl: '.cp-testimonial2-button-prev',
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  ////////////////////////////////////////
  // Brand Active Js 
  var brandActive = new Swiper(".cp-brand-active", {
    slidesPerView: 5,
    spaceBetween: 140,
    loop: true,
    rtl: rtl_setting,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      1400: {
        slidesPerView: 5,
        spaceBetween: 130,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 140,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      0: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  });

  ////////////////////////////////////////////////////
  // Case Study Active js
  var cpBrand3 = new Swiper(".cp-brand3-active", {
    rtl: rtl_setting,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 6,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
    centeredSlides: true,
    speed: 5000,
    breakpoints: {
      1600: {
        slidesPerView: 6,
      },
      1400: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  ////////////////////////////////////////////////////
  // Case Study Active js
  var cpCaseStudy = new Swiper(".cp-case-study3-active", {
    rtl: rtl_setting,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
    },
    speed: 5000,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });
  $(".cp-case-study3-active").mouseenter(function () {
    (this).swiper.autoplay.stop();
  }, function () {
    (this).swiper.autoplay.start();
  });


  // Offer Active js
  var cpOffer = new Swiper(".cp-offer1-active", {
    rtl: rtl_setting,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true
    },
    speed: 5000,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  // offer Active js
  var cpOffer = new Swiper(".cp-offer2-active", {
    rtl: rtl_setting,
    loop: true,
    spaceBetween: 0,
    slidesPerView: 3,
    autoplay: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: true,
      reverseDirection: true,
    },
    speed: 5000,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });


  ////////////////////////////////////////////////////
  // Case Study Active js
  var cpCaseStudy4 = new Swiper(".cp-case-study4-active", {
    rtl: rtl_setting,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 3,
    autoplay: {
      delay: 0,
      pauseOnMouseEnter: true,
      reverseDirection: true,
      disableOnInteraction: false
    },
    speed: 5000,
    breakpoints: {
      1600: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });

  $(".cp-case-study4-active").mouseenter(function () {
    (this).swiper.autoplay.stop();
  }, function () {
    (this).swiper.autoplay.start();
  });

  // project js   
  var projectActive = new Swiper(".cp-related-project-active", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    navigation: {
      nextEl: '.cp-project-button-next',
      prevEl: '.cp-project-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 1,
      },
      0: {
        slidesPerView: 1,
      },
    },
  });


  // product isotope js 
  $(".grid").imagesLoaded(function () {
    var $grid = $(".grid").isotope({
      percentPosition: true,
      itemSelector: ".grid-item",
    });
    // filter items on button click
    $(".cp-product-menu").on("click", "button",
      function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      }
    );

    //for menu active class
    $(".cp-product-menu button").on("click", function (event) {
      $(this).siblings(".active").removeClass("active");
      $(this).addClass("active");
      event.preventDefault();
    }
    );
  });

  // news active js   
  var cpnews3 = new Swiper(".cp-news3-active", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    rtl: rtl_setting,
    navigation: {
      nextEl: '.cp-news3-button-next',
      prevEl: '.cp-news3-button-prev',
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 2,
      },
    },
  });

  // news related post js
  var cpNewRelated = new Swiper('.cp-news2-related-active', {
    spaceBetween: 30,
    slideToClickedSlide: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    rtl: rtl_setting,
    pagination: {
      el: ".Case-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
      },
    },

    navigation: {
      nextEl: ".cp-news2-button-next",
      prevEl: ".cp-news2-button-prev",
    },
    breakpoints: {
      '1400': {
        slidesPerView: 2,
      },
      '1200': {
        slidesPerView: 2,
      },
      '992': {
        slidesPerView: 1,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  })

  /* magnificPopup img view */
  $(".image-popups").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  /* magnificPopup video view */
  $(".popup-video").magnificPopup({
    type: "iframe",
  });

  ////////////////////////////////////////////////////
  // Wow Js
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 100,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();

  ////////////////////////////////////////////////////
  // Data width Js
  $("[data-width]").each(function () {
    $(this).css("width", $(this).attr("data-width"));
  });

  ////////////////////////////////////////////////////
  // Cart Quantity Js
  $(".cart-minus").click(function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });

  $(".cart-plus").click(function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  ////////////////////////////////////////////////////
  // Counter Js
  $(".counter").counterUp({
    delay: 10,
    time: 1000,
  });

  //range slider activation
  $(".slider-range-bar").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $(".amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });

  /////////////////////////////////////////
  // Product Slider Js
  var produc = new Swiper('.cp-related-product-active', {
    slidesPerView: 4,
    spaceBetween: 30,
    slideToClickedSlide: true,
    loop: true,
    autoplay: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".cp-product-button-next",
      prevEl: ".cp-product-button-prev",
    },
    speed: 1000,
    breakpoints: {
      '1400': {
        slidesPerView: 4,
      },
      '1200': {
        slidesPerView: 4,
      },
      '992': {
        slidesPerView: 3,
      },
      '768': {
        slidesPerView: 2,
      },
      '576': {
        slidesPerView: 2,
      },
      '480': {
        slidesPerView: 1,
      },
      '0': {
        slidesPerView: 1,
      },
    },
  });

  /////////////////////////////////////////
  // side - info
  $(".side-info-close,.offcanvas-overlay").on("click", function () {
    $(".side-info").removeClass("info-open");
    $(".offcanvas-overlay").removeClass("overlay-open");
  });
  $(".side-toggle").on("click", function () {
    $(".side-info").addClass("info-open");
    $(".offcanvas-overlay").addClass("overlay-open");
  });

  // about zoom js 
  var elementOffset = 400;
  $(window).on("scroll", function () {
    var toFade = document.getElementsByClassName("fade-jr");
    for (var i = 0; i < toFade.length; i++) {
      if ($(window).scrollTop() > $(".fade-jr").eq(i).offset().top - elementOffset) {
        $(".fade-jr").eq(i).addClass("zoom");
        $(".fade-jr").eq(i).css("opacity", "1");
      }
    }
  });

  /////////////////////////////////////////
  // Titl js 
  const tilt = $('.js-tilt').tilt({
    maxTilt: 20,
    perspective: 1000,
    easing: "cubic-bezier(.03,.98,.52,.99)",
    scale: 1,
    speed: 300,
    transition: true,
    disableAxis: null,
    reset: true,
    glare: false,
    maxGlare: 1
  });

  /////////////////////////////////////////
  // Banner Video 
  $("#video_check").on('click', function () {
    $('.add-z-index-1000').toggleClass('z-index-1000');
  });
  $("#video_check").on('click', function () {
    $('.add-z-index-500').toggleClass('z-index-500');
  });

//   $(document).ready(function() {
//     $("[data-fancybox='gallery']").fancybox();
// });

})(jQuery);
