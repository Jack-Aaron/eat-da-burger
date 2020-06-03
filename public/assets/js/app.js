console.log("app.js is linked!");

// click function to add a new burger
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var burgerInput = $("#burger-input")[0].value.trim();
    console.log(burgerInput);

    var newBurger = {
        burger_name: burgerInput.toString(),
        devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});
// click function to devour burger, which disappears it from one column and adds to the other
$(function () {
    $(".devour-burger").on("click", function (event) {
        var id = $(this).data("id");

        var newDevouredState = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

  

});