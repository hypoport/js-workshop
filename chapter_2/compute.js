function schwierigeBerechnung() {
  "use strict";

  var now = new Date().getTime();

  console.log("start");
  while (new Date().getTime() < (now + 1000 * 10)) {
    // idle
  }
  console.log("fertig");
}