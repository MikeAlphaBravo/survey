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
    var timeSpan = parseInt($("input:radio[name=timeSpan]:checked").val());

    var scoreTotal = spice + vacation + adventure + excites + timeSpan;

    $(".destination").hide();
    $("#confirmation").show();
    if (scoreTotal === 5 || scoreTotal === 6) {
      $("#destination1").show();
    } else if (scoreTotal === 7 || scoreTotal === 8) {
      $("#destination2").show();
    } else if (scoreTotal >= 9) {
      $("#destination3").show();
    }
    event.preventDefault();

  });
});
