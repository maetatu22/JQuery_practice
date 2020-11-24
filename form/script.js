$(() => {
  var title = $("#title").text();
  var id = $(".section-content p").attr('id');
  var href = $("#link").attr("href");

  $("#title-text").text(title);
});