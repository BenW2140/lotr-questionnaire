$(document).ready(function() {
  $("#questionnaire").submit(function(event) {
    event.preventDefault();
    const question1 = $("input:radio[name=question1]:checked").val();
    const question2 = $("input:radio[name=question2]:checked").val();
    const question3 = $("input:radio[name=question3]:checked").val();
  });
});