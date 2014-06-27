$("document").ready(function() {
  $(".comment-ctrl").click(function() {
    $(".comment-container").css("top", "0px");
  });
  $(".comment-close").click(function() {
    $(".comment-container").css("top", "100%");
  });
});