const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.heap = new MaxHeap();
		if (maxSize != null) {
            this.maxSize = maxSize;
		} else {
			this.maxSize = 30;
		}

	}

	push(data, priority) {
		if (this.heap.currentSize === this.maxSize) {
            throw 'Error Max Size';
		}
		this.heap.push(data, priority);
	}

	shift() {
		if (this.heap.currentSize === 0) {
			throw 'queue is empty';
		}
		return this.heap.pop();
	}

	size() {
		return this.heap.currentSize;
	}

	isEmpty() {
		return this.heap.currentSize === 0;
	}
}

module.exports = PriorityQueue;
