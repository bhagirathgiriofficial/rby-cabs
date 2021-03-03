$(document).on("scroll", () => {
  const navbar = $("#custom-navbar");
  let pos = $(document).scrollTop();
  if (pos > 0) {
    navbar.removeClass("navbar-top").addClass("navbar-scroll");
  } else {
    navbar.removeClass("navbar-scroll").addClass("navbar-top");
  }
});
// Best Cars Slider

// ----------------
