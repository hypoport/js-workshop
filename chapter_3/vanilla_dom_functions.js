function ermittle_Element_per_ID(id) {
  var element = document.getElementById(id);
  console.info("Name des Elements: " + element.nodeName);
  console.info("Typ des Elements: " + element.nodeType);
  console.info("Wert des Elements: " + element.nodeValue);
  return element;
}

function erstelle_neues_Element(text) {
  var element_li = document.createElement("li")
  var element_text = document.createTextNode(text);
  element_li.appendChild(element_text);
  return element_li;
}

function erzeuge_neues_KindElement(parentId, text) {
  var parent = ermittle_Element_per_ID(parentId);
  if (parent) {
    var child = erstelle_neues_Element(text);
    parent.appendChild(child);
  }
}