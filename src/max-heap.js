const Node = require('./node');

class MaxHeap {
	constructor() {
        this.root = null;
        this.parentNodes = [];
        this.currentSize = 0;
	}

	push(data, priority) {
		this.insertNode(new Node(data, priority));
		this.shiftNodeUp(new Node(data, priority));
        this.currentSize++;
	}

	pop() {
        if (this.parentNodes.length===1) {
            this.restoreRootFromLastInsertedNode(this.detachRoot());
		}
		if (this.parentNodes.length>0) {
		}
		if (this.currentSize>0)
        	this.currentSize--;
	}

	detachRoot() {
        let detachedRoot = this.root;
        if (this.currentSize > 0) {
            if (this.currentSize === 1) {
                this.root = null;
            } else {
                if (this.parentNodes.indexOf(detachedRoot)>=0) {
                    this.parentNodes.shift();
                }
            }
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
	    if (node.parent !== null) {
            let oldPidx = this.parentNodes.indexOf(node.parent);
            let parent = node.parent;
            let nPidx = this.parentNodes.indexOf(node);
            node.swapWithParent();
            this.parentNodes[oldPidx] = node;
            this.parentNodes[nPidx] = parent;
            this.shiftNodeUp(node);
        } else {
	        this.root = node;
        }
	}

	shiftNodeDown(node) {
	    if (node.left !== null) {
	        let newParent = node.left;
            let oldIdx = this.parentNodes.indexOf(node.left);
            let nIdx = this.parentNodes.indexOf(node);
            node.left.swapWithParent();
            if (nIdx >= 0) {
                this.parentNodes[nIdx] = newParent;
            }
            this.parentNodes[oldIdx] = node;
            if (newParent.parent === null) this.root = newParent;
            this.shiftNodeDown(node);
        }

	}
}

module.exports = MaxHeap;
