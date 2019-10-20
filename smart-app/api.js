import CardFlip from "./src/Pages/CardFlip";

$(document).ready(function() {

  var subjects = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", 
  ];

  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();

    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }

  }

  $(document).on("click", ".subject-button", function() {
    $("#subjects").empty();
    $(".subject-button").removeClass("active");
    $(this).addClass("active");

    var type = $(this).attr("data-type");
    var queryURL = "https://dictionaryapi.com/api/v3/references/collegiate/json/test?key=d37a11a3-1cb2-470c-8dc0-465d9aa55a54"

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        }
      );
  });

  $(document).on("click", ".subject-card", function() {

  })})

  export default CardFlip;
