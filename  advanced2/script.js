$(() => {
  $("#second-btn").click(() => {
    $(".active").removeClass("active");
    $(".slide").eq(1).addClass("active");
  });
});