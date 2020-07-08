// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // ****************
  // PUT
  // ****************
  $(".change-complete").on("click", function(event) {
    var id = $(this).data("id");
    var complete = $(this).data("complete");

    var completeObj = {
      complete: complete
    };

    // Send the PUT request.
    $.ajax("/api/todos/" + id, {
      type: "PUT",
      data: completeObj
    }).then(
      function() {
        console.log("Change complete to: " + completeObj);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // ****************
  // POST
  // ****************

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTodo = {
      text: $("#ca").val().trim(),
      complete: false
    };

    // Send the POST request.
    $.ajax("/api/todos", {
      type: "POST",
      data: newTodo
    }).then(
      function() {
        console.log("created new todo");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // ****************
  // DELTE
  // ****************

  $(".delete-todo").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/todos/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted todo", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});