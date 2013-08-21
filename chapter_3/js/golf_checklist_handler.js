$(document).ready(function () {
  var counter = 0;
  $("#btnGolfPlus").click(function (event) {
    $("#countGolf").text("" + (++counter));
  });
  $("#btnGolfMinus").click(function (event) {
    $("#countGolf").text("" + (--counter));
  });
  $("#btnSonderAusstattung").on('click', function (event) {
    $('#sonderAusstattung').toggle('slow');
  });
});

$().ready(function () {
  function checkUnCheckEventHandler(event) {
    if ($(event.target).hasClass("glyphicon-check")) {
      $(event.target).removeClass("glyphicon-check");
      $(event.target).addClass("glyphicon-unchecked");
    } else {
      $(event.target).removeClass("glyphicon-unchecked");
      $(event.target).addClass("glyphicon-check");
    }
  }

  $(".glyphicon").click(checkUnCheckEventHandler);
});



