console.log("your index.js file is loaded correctly");

$("#buttonSubmit").hover(function(){
  $(this).css("background-color", "rgba(186, 12, 47, 1)");
  }, function(){
  $(this).css("background-color", "black");
});

$(".works").hover(function(){
  $(this).css("text-decoration", "underline");
  }, function(){
  $(this).css("text-decoration", "none");
});

$(".contact").hover(function(){
  $(this).css("text-decoration", "underline");
  }, function(){
  $(this).css("text-decoration", "none");
});

$(".homeImg").hover(
  function(){$(this).animate({width: "70px", height:"70px"}, 100);},        
  function(){$(this).animate({width: "58px", height:"58px"}, 100);}
);