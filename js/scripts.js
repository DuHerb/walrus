$(function(){
// walrus image toggle
  $(".clickable").click(function(){
    $("#show").fadeIn();
  });
  $(".clickoff").click(function(){
    $("#show").fadeOut();
  });

  //change background colors
  $("button#green").click(function() {
  $("body").removeClass("yellow-background red-background");
  $("body").addClass("green-background");
});

$("button#yellow").click(function() {
  $("body").removeClass("green-background red-background");
  $("body").addClass("yellow-background");
});

$("button#red").click(function() {
  $("body").removeClass("green-background yellow-background");
  $("body").addClass("red-background");
});
});
