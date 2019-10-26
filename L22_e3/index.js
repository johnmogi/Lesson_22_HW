$(document).ready(function() {
  var selecta = $("#selecta");
  var retievedVals = $("#retievedVals");
  var numberOne = $("#numberOne");
  var numberTwo = $("#numberTwo");

  var forminator = $("#forminator");

  let e = false;

  function validate() {
    var oneValue = $("#numberOne").val();
    var twoValue = $("#numberTwo").val();
    if (!$("#numberOne").val() == "" || !$("#numberTwo").val() == "") {
      return (e = true);
    } else {
      alert("empty field");
      return (e = false);
    }
  }
  function init() {
    $("#retievedVals").html("");
    $("#retievedVals").append($("<option>" + "Choose ..." + "</option>"));
  }
  $("#selecta").click(function() {
    validate();
    if (e == false) return;
    //* Success
    init();
    $("#retievedVals").append(
      $("<option>" + $("#numberOne").val() + "</option>")
    );
    $("#retievedVals").append(
      $("<option>" + $("#numberTwo").val() + "</option>")
    );
    // $("#retievedVals").append($("'<option>'" + oneValue + "'</option>'"));
  });
}); // * RF
