//removeChild()
//remove a child node from the DOM and returns the removed node.

// var parentElem = document.getElementById("main");
// var childElem = document.getElementById("hint");
// parentElem.removeChild(childElem);

// or

// var childElem = document.getElementById("hint");
// childElem.parentNode.removeChild(childElem);





//replaceChild()
//accepts two parameters: the node to insert and the node to be replaced.
//syntax like parentNode.replaceChild(newChild, oldChild);

// var parentElem = document.getElementById("main");
// var oldPara = document.getElementById("hint");
 
// // Creating new elememt
// var newPara = document.createElement("p");
// var newContent = document.createTextNode("Testyantra software solutions");
// newPara.appendChild(newContent);
 

// // Replacing old paragraph with newly created paragraph
// parentElem.replaceChild(newPara, oldPara);








//Accessing the child nodes
// var main = document.getElementById("main");
// console.log(main.firstChild.nodeName); // Prints: #text

// var hint = document.getElementById("hint");
// console.log(hint.firstChild.nodeName); // Prints: SPAN

// The nodeName is a read-only property that
// returns the name of the current node as a string












//to avoid the issue from firstChild and lastChild
// firstElementChild and lastElementChild properties to return only 
//the first and last element node

var main = document.getElementById("main");
alert(main.firstElementChild.nodeName); // Outputs: H1
main.firstElementChild.style.color = "red";

var hint = document.getElementById("hint");
//alert(hint.firstElementChild.nodeName); // Outputs: SPAN
hint.firstElementChild.style.color = "blue";








