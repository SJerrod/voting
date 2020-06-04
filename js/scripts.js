$(document).ready(function() {
  $("form#age").submit(function(event){
    event.preventDefault();
    const dob = parseInt($("#born").val());
    console.log(dob);

  
    if (age > 18) {
      $('.over18').show();
    } else if (age === 18) {
      $('.ofAge').show();
    } else if (age < 18) {
      $('.under18').show();
    }
  });
});