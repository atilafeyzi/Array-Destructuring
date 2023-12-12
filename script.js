// Challenge: Array Destructuring

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

const [frontend, backend] = fullStack;

console.log(fullStack);

const [, css, , react] = frontend;
console.log(css, react);

const [node, express, mongoDB] = backend;
console.log(node, express, mongoDB);
