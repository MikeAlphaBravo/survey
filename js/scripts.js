$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var clientNameInput = $("input#clientName").val();
    var clientEmailInput = $("input#clientEmail").val();
    var appointmentDateInput = $("input#appointmentDate").val();

    $(".clientName").text(clientNameInput);
    $(".clientEmail").text(clientEmailInput);
    $(".appointmentDate").text(appointmentDateInput);

    var flavor = $("input:radio[name=flavor]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();
    var flavor = $("input:radio[name=flavor]:checked").val();

    $("#confirmation").show();
    $("#emptyForm").hide();
    event.preventDefault();

  });
});
