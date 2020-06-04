$(document).ready(function() {
  $("form#age").submit(function(event){
    event.preventDefault();
    const age = parseInt($("input#age").val());
    $('.under18').hide();
    $('.ofAge').hide();
    $('.over18').hide();
    
    if (age > 18) {
      $('.over18').show();
    } else if (age === 18) {
      $('.ofAge').show();
    } else if (age < 18) {
      $('.under18').show();
    }
  });
});


