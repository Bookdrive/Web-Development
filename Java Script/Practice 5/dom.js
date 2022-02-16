// const rootNode = document.getRootNode();
// console.log(rootNode);
// const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode);
// console.log(htmlElementNode.childNodes);
const h1 = document.querySelector("h1");
console.log(h1);

const div = h1.parentNode;
div.style.color = "#fff";
div.parentNode.style.backgroundColor = "#333";