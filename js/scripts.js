$(document).ready(function() {
  $("form#age").submit(function(event){
    event.preventDefault();
    // const dob = $("input#born").val();
    const age = parseInt($("input#age").val());
    
    if (age > 18) {
      $('.over18').show();
    } else if (age === 18) {
      $('.ofAge').show();
    } else if (age < 18) {
      $('.under18').show();
    }
    // $("body").removeClass(".over18, .ofAge, .under18");
  });
});


