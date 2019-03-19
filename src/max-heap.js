const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes = [];
        this.tick = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
	}

	pop() {

	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {

	}

	clear() {

	}

	insertNode(node) {
		this.parentNodes.push(node);

		if (this.root === null) {
            this.root = node;
		} else
			if (this.root.left === null) {
				this.root.left = node;
			} else
				if (this.root.right === null) {
                    this.root.right = node;
				} else
					if (this.root.left.left === null) {
                        this.root.left.left = node;
					} else
						if (this.root.left.right === null) {
                            this.root.left.right = node;
						} else
							if (this.root.right.left === null) {
								this.root.right.left = node;
							} else
								if (this.root.right.right === null) {
									this.root.right.right = node;
								}
	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
