const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes = [];
        this.tick = 0;
        this.currentSize = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
        this.currentSize++;
	}

	pop() {
        if (this.parentNodes.length===1) {
        	this.detachRoot();
		}
		if (this.parentNodes.length>0) {
			//
		}
		if (this.currentSize>0)
        	this.currentSize--;
	}

	detachRoot() {
		let detachedRoot = null;
		if (this.currentSize === 1) {
            detachedRoot = this.root;
			this.root = null;
		}
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.currentSize;
	}

	isEmpty() {
		return this.root === null && this.parentNodes.length === 0;
	}

	clear() {
        this.root = null;
        this.parentNodes = [];
        this.tick = 0;
        this.currentSize = 0;
	}

	insertNode(node) {
        if(this.isEmpty()){
            this.root = node;
            this.parentNodes.push(node);
        }
        else{
            this.parentNodes.push(node);
            this.parentNodes[0].appendChild(node);
            if(this.parentNodes[0].left !== null && this.parentNodes[0].right !== null) this.parentNodes.shift();
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
