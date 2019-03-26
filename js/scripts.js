$(function(){
  // $(".clickable").click(function(){
  //   $("#hide").toggle();
  //   $("#show").toggle();
  // });

  $(".clickable").click(function(){
    $("#show").fadeIn();
  });
  $(".clickoff").click(function(){
    $("#show").fadeOut();
  });
});
