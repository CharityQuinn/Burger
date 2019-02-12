$(document).ready(function() {
  //user entered a burger
  $("#submit-btn").on("click", function(e) { 
    e.preventDefault();
    console.log("This is what the entry is " + this);
    
  
    //package up the burger type
    const burgerItem = {
      burgers: $("#burger-input").val().trim()
    }
    console.log("This is burgerItem " + burgerItem);
    // post this burger to db
    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: burgerItem  //req.body
    })
    .then(function(data) {
      location.reload();
    });
  });
});

$(".ate").on("click", function() {
  // change burger from not devoured to devoured
  // read id from button
  const burger = $(this).attr("id");
  $.ajax({
    url: "/api/burgers" + id,
    method: "PUT",
  }).then(function(data) {
    location.reload();
  });
});

