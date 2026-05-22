$(document).ready(function () {
  $(".animate-scroll").on("click", function (event) {
    event.preventDefault();

    var target = $(this.hash);
    if (!target.length) {
      return;
    }

    $("html, body").animate({
      scrollTop: target.offset().top - 70
    }, 500);
  });
});
