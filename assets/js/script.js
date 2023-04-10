$(document).ready(function () {
  if ($("html").attr("dir") == "rtl") {
    var dir_lang = true;
  } else {
    var dir_lang = false;
  }

  $(".min-header-section .menu-box-icon i").click(function (e) {
    e.preventDefault();
    $(".min-header-section .mobile-menu").addClass("open-menu");
    $(".overlay").fadeIn();
  });
  $(".overlay").click(function (e) {
    $(this).fadeOut();
    e.preventDefault();
    $(".min-header-section .mobile-menu").removeClass("open-menu");
  });

  $(".product-slider1").slick({
    slidesToShow: 4,
    prevArrow: "#arriivals-slider-prev",
    nextArrow: "#arriivals-slider-next",
    infinite: false,
    adaptiveHeight: true,
    rtl: dir_lang,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".product-slider2").slick({
    slidesToShow: 4,
    prevArrow: "#arriivals-slider-prev2",
    nextArrow: "#arriivals-slider-next2",
    infinite: false,
    adaptiveHeight: true,
    rtl: dir_lang,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 772,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
