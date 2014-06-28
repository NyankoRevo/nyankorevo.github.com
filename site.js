var pages = {
    home: {
        background: "#fff",
        data: "#home",
        color: "#4d4045",
        btn: "#btn-home"
    },
    works: {
        background: "#3c71d1",
        data: "#works",
        color: "#fff",
        btn: "#btn-works"
    },
    us: {
        background: "#5eb556",
        data: "#us",
        color: "#fff",
        btn: "#btn-us"
    }
}
function flash(callback) {
  $("#show").fadeOut(function(){
    callback();
    $("#show").fadeIn();
  });
}

$("document").ready(function() {
  $(".comment-ctrl").click(function() {
    $(".comment-container").css("top", "0px");
  });
  $(".comment-close").click(function() {
    $(".comment-container").css("top", "100%");
  });
  $(pages.home.btn).click(function() {
    $("html").css("background", pages.home.background);
    $("#show").css("color", pages.home.color);
    flash(function(){
      $("#show").html($(pages.home.data)[0].innerHTML);
    })
  });
  $(pages.works.btn).click(function() {
    $("html").css("background", pages.works.background);
    $("#show").css("color", pages.works.color);
    flash(function(){
      $("#show").html($(pages.works.data)[0].innerHTML);
    })
  });
  $(pages.us.btn).click(function() {
    $("html").css("background", pages.us.background);
    $("#show").css("color", pages.us.color);
    flash(function(){
      $("#show").html($(pages.us.data)[0].innerHTML);
    })
  });
});