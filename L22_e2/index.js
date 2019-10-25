$(document).ready(function() {

  var selecta = $("#selecta")
  var selectb = $("#selectb")
  var dest1 = $("#dest1")
  var dest2 = $("#dest2")
  var left1 = $("#left1").val()
  var left2 = $("#left2").val()
let e =false;

function validate(){
  if(!$("#left1").val() == "" || !$("#left1").val() == "" ){
    return e =true;
  }
    else{ 
      alert("empty field")
    return e = false}
 
}
  //   var selecta = $("#selecta");

  $("#selecta").click(function() {
    validate();
    if (e == false) return ;
    $("#left1").toggle();
    $("#dest1").html(left1)

  });
  $("#selectb").click(function() {
    validate();
    if (e == false) return ;
    $("#left2").toggle();
    $("#dest2").html(left2)

  });

}); // * RF
