$(() => {
  $(".signup-show").click(() => {
    $("#signup-modal").fadeIn(1000);
  })

  $("#close-modal").click(() => {
    $("#signup-modal").fadeOut(1000);
  })

  $(".lesson").hover(
    function() { 
      $(this).find(".text-contents").fadeIn();
    },
    function() {
      $(this).find(".text-contents").fadeOut();
    });

});