function clearList() {
  $('.results').empty();
}

$(".btn").on("click", function(event) {
  event.preventDefault();
    clearList()
  var cardName = $(".form-control").val();
  var queryUrl = "https://api.magicthegathering.io/v1/cards?name=" + cardName;

  $.ajax({
    url: queryUrl,
    method: "GET"
  }).then(function(response) {

    // clearList()
    console.log(response.cards[0]);
    var stuff = response.cards[0];
    var clarify = stuff.rulings;
    var name = stuff.name;
    var img = stuff.imageUrl;
    // var imageDiv = $("<div>")
    // imageDiv.append('<img id="theImg" src="'+ img +'" />')
    $(".resultImg").append(imageDiv)
    for (i = 0; i < clarify.length; i++) {
      var container = $("<div>");
      container.addClass("rulesContainer bg-light mt-5");
      var imageDiv = $("<div>")
      var div = $("<div>");
      var nameDiv = $("<div>");

      container.append(imageDiv);
      container.append(nameDiv);
      container.append(div);
    
      imageDiv.append('<img id="theImg" src="'+ img +'" />')
      nameDiv.addClass(" mb-1 name");
      nameDiv.text(name);

      div.addClass(" mb-3 list_" + i);
      div.text(clarify[i].text);
      $(".results").append(container);
    }
  });
});
