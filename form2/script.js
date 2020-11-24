$(() => {
  $("#form").submit(function(){
    const textValue = $("#text-form").val();
    $("#output-text").text(textValue);
    return false;
  })
})