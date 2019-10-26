$(document).ready(function() {
  var selecta = $("#selecta");
  $(".col").html("");

  $("#selecta").click(function() {
    let index = 1;
    $(".col").each(function() {
      $(this).html(index);
      index++;
    });
  });
}); // * RF
