$(() => {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    const clickedIndex = $(".index-btn").index($(this))
    $('.slide').eq(clickedIndex).addClass('active');
  });
});