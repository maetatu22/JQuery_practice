$(() => {
  $(".signup-show").click(() => {
    $("#signup-modal").fadeIn(1000);
  })

  $("#close-modal").click(() => {
    $("#signup-modal").fadeOut(1000);
  })
});