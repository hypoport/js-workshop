
# Ein kleines Spielchen ...

````
  function Beispiel_DOM() {
    var div = $("<div>");
    var ul = $("<ul>");
    div.append(ul);
    for (var i = 0; i < 2; i++) {
      $("<li>").text("i=" + i).appendTo(ul);
    }
    div.append($("<a>").attr("href", "https://github.com/hypoport/js-workshop").text("Link zum Repo").addClass("link"));
    var $h1 = $("<h1>").text("Hypoport's Javascript Workshop");
    $h1.insertBefore(ul);
    var b = $("<b>").text("Viel Spaß!");
    console.log(div.find("a"));
    div.find("a").after(b);
    return div;
  }
````

