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
		if (this.heap.parentNodes.length === this.maxSize) {
            throw 'Error Max Size';
		}
		this.heap.push(data, priority);
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
