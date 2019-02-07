$(document).ready(function() {
  //user entered a burger
  $("#submit-button").on("click", function(e) { 
    e.preventDefault();

    //package up the burger type
    const burgerItem = {
      burger: $("#burger-input").val().trim()
    }
    // post this burger to db
    $.ajaz({
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

