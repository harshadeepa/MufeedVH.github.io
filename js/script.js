$(document).ready(function() {
  $("#left").click(function() {
    $("#car").css({
    "margin-right": "800px",
    "transition": "all 0.5s",
    "-o-transition": "all 0.5s",
    "-ms-transform": "rotate(-20deg)",
    "-webkit-transform": "rotate(-20deg)",
    "transform": "rotate(-20deg)"
    });
  });
  $("#right").click(function() {
    $("#car").css({
    "margin-left": "800px",
    "transition": "all 0.5s",
    "-o-transition": "all 0.5s",
    "-ms-transform": "rotate(20deg)",
    "-webkit-transform": "rotate(20deg)",
    "transform": "rotate(20deg)"
    });
  });
  $("#up").click(function() {
    $("#car").css({
    "margin-bottom": "400px",
    "transition": "all 0.5s",
    "-o-transition": "all 0.5s",
    "-webkit-transform": "rotate(0deg)",
    "transform": "rotate(0deg)"
    });
  });
});

$(document).ready(function(){
  $('#up').click(function(){
    $(button).css({
      "margin-bottom": "1000px"
    });
  });
});
