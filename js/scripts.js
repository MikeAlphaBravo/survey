$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var clientNameInput = $("input#clientName").val();
    var clientEmailInput = $("input#clientEmail").val();
    var appointmentDateInput = $("input#appointmentDate").val();

    $(".clientName").text(clientNameInput);
    $(".clientEmail").text(clientEmailInput);
    $(".appointmentDate").text(appointmentDateInput);

    $("#confirmation").show();
    $("#emptyForm").hide();
    event.preventDefault();

  });
});
