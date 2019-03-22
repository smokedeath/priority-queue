const MaxHeap = require('./src/max-heap');

const h = new MaxHeap();
window.h = h;

const Node = require('./src/node');
h.root = new Node(0, 3);
h.root.appendChild(new Node(1, 20));
h.root.appendChild(new Node(2, 7));
h.root.left.appendChild(new Node(3, 5));

const newRoot = h.root.left;
const newDeepest = h.root;

h.shiftNodeDown(h.root);
console.log('res');
