const MaxHeap = require('./src/max-heap');

const h = new MaxHeap();
window.h = h;

h.push(42, 15);
h.push(14, 32);
h.push(0, 0);

const root = h.root;
const left = h.root.left;
const lastInsertedNode = h.root.right;

const detached = h.detachRoot();
h.restoreRootFromLastInsertedNode(detached);

console.log(h);
