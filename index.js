const MaxHeap = require('./src/max-heap');

const h = new MaxHeap();
window.h = h;


h.push(42, 15);
h.push(15, 14);
h.push(0, 16);
h.push(100, 100);

console.log(h.pop()); // expect(h.pop()).to.equal(100);
console.log(h.pop()); // expect(h.pop()).to.equal(0);
console.log(h.pop()); // expect(h.pop()).to.equal(42);
console.log(h.pop()); // expect(h.pop()).to.equal(15);

console.log(h);
