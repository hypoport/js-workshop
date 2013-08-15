
function ermittle_Element_per_ID(name) {
  var element = document.getElementById(name);
  console.info("Name des Elements: " + element.nodeName);
  console.info("Typ des Elements: " + element.nodeType);
  console.info("Wert des Elements: " + element.nodeValue);
}