$(document).ready(function() {
  $("#formOne").submit(function() {
    var person1Input = $("input#person1").val().toUpperCase();
    $("#capitalized").text(person1Input + "!");
    event.preventDefault();

  });
});
