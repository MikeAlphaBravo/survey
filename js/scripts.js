// var add = function(number1, number2, number3, number4, number5) {
//   return number1 + number2 + number3 + number4 + number5;
// };


$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var clientNameInput = $("input#clientName").val();
    var clientEmailInput = $("input#clientEmail").val();
    var appointmentDateInput = $("input#appointmentDate").val();

    $(".clientName").text(clientNameInput);
    $(".clientEmail").text(clientEmailInput);
    $(".appointmentDate").text(appointmentDateInput);

    var spice = parseInt($("input:radio[name=spice]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());
    var adventure = parseInt($("input:radio[name=adventure]:checked").val());
    var excites = parseInt($("input:radio[name=excites]:checked").val());
    var length = parseInt($("input:radio[name=length]:checked").val());

    var scoreTotal = spice + vacation + adventure + excites + length;

    // if (scoreTotal === 5) {
    //   $(".destination1").show();
    // }

//    $("form#add").submit(function(event) {
//      var number1 = parseInt(spice);
//      var number2 = parseInt(vacation);
//      var number3 = parseInt(adventure);
//      var number4 = parseInt(excites);
//      var number5 = parseInt(length);
//      var result = (add(number1, number2, number3, number4, number5));

//      if (result === 5) {
//        $(".destination1").show();
//      }
//    $("#output").text(scoreTotal);



    $("#confirmation").show();
    if (scoreTotal === 5) {
      $("#destination1").show();
    }
    event.preventDefault();

  });
});
