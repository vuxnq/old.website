$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= window.innerHeight / 2 - 70) {
    $("header").addClass("scroll");
  } else {
    $("header").removeClass("scroll");
  }
});

// https://dev.to/b4two/how-to-make-a-custom-cursor-with-css-and-jquery-5g3m
// cursor
$(document).ready(function () {
  var cursor = $("#cursor");

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2,
      left: e.clientX - cursor.width() / 2
    });
  });

  //  $(window)
  //  .mouseleave(function() {
  //      cursor.css({
  //          opacity: "0"
  //      });
  //  })
  //  .mouseenter(function() {
  //      cursor.css({
  //          opacity: "0.5"
  //      });
  //  });

  $("a")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(2)",
        opacity: "0.1"
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
        opacity: "0.5"
      });
    });

  $(window)
    .mousedown(function () {
      cursor.css({
        transform: "scale(.2)"
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(1)"
      });
    });
});
