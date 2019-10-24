$(document).ready(function() {
  //   var selecta = $("#selecta");

  $("#selecta").click(function() {
    setTimeout(() => {
      $(".blue").toggleClass(function() {
        if ($(this)) {
          return "opacityempty";
        } else {
          return "opacityfull";
        }
      });

      //   $(".blue").toggle(200, "");
      //   $(".blue").css("opacity", "0");
    }, 500);
  });
}); // *RF
