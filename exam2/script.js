$(function() {


  $('.signup-show').click(function() {
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function() {
    $('#signup-modal').fadeOut();
  });


  $('.lesson').hover(
    function() {
      $(this).find('.text-contents').addClass('text-active');
    },
    function() {
      $(this).find('.text-contents').removeClass('text-active');
    }
  );
  

  $('.faq-list-item').click(() => {
    var $answer = $(this).find(".answer")
    if($answer.hasClass("open")){
      $answer.removeClass("open");
      $answer.fadeOut();
      $(this).find("span").text("+");
    }else{
      $answer.addClass("open");
      $answer.fadeIn();
      $(this).find("span").text("-");
    }
  });

});
