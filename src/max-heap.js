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
        if (this.parentNodes.length===1) {
        	this.detachRoot();
		}
		if (this.parentNodes.length>0) {
			//
		}
	}

	detachRoot() {

	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	isEmpty() {
		return this.root === null && this.parentNodes.length === 0;
	}

	clear() {
        this.root = null;
        this.parentNodes = [];
        this.tick = 0;
	}

	insertNode(node) {
		if (this.parentNodes.length===0) {
			this.parentNodes.push(node);
			this.tick++;
        } else
        	if (this.tick===1) {
                this.parentNodes.push(node);
                this.tick++;
			} else {
				if (this.tick % 2 === 0) {
                    for(let i = 0; i < this.parentNodes.length-1; i++) {
                        this.parentNodes[i] = this.parentNodes[i+1];
                    }
                    this.parentNodes[this.parentNodes.length-1] = node;
				} else {
                    this.parentNodes.push(node);
				}
                this.tick++;
			}

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
		let rr = this.root;
        let noCansel = true;
        while (noCansel) {
            if (node.parent === null) noCansel = false;
            if (node.parent!==null) {
                if (node.parent === rr) {
                    noCansel = false;
                }
                node.swapWithParent();
            }
        }
        if (!noCansel) {
            this.root = node;
        }
	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
