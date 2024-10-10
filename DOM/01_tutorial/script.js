// DOM is used to manupilate html elements through javascript

console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.childNodes);

// following are always true
console.log(document.body.childNodes[0] === document.body.firstChild);
console.log(document.body.childNodes[document.body.childNodes.length - 1] === document.body.lastChild);

// function to check weather there are child nodes or not
console.log(document.body.hasChildNodes()); 