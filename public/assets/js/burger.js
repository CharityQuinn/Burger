$(document).ready(function() {
  //user entered a burger
  $("#submit-btn").on("click", function(e) { 
    e.preventDefault();
    console.log("This is what the entry is " + this);
    
  
    //package up the burger type
    const burgerItem = {
      burger_name: $("#burger-input").val().trim()
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

$("#mark-eaten").on("click", function() {
  console.log("The eat burger button was pushed");
  // change burger from not devoured to devoured
  // read id from button
  const eatBurger = $(this).attr("data-id");
  console.log("This is the id to be eaten " + eatBurger);
  $.ajax({
    url: "/api/burgers/" + eatBurger,
    method: "PUT",
  }).then(function(data) {
    location.reload();
  });
});

$(document).on("click", "#delete", function() {
  console.log("The delete burger button was pushed");
  // read id from button
  const delBurger = $(this).attr("data-id");
  console.log("This is burger to be deleted " + delBurger)
  $.ajax({
    url: "/api/burgers/" + delBurger,
    method: "DELETE"
  }).then(function (data) {
    location.reload();
  });

}) 


