const Node = require('./node');

class MaxHeap {
    constructor() {
        this.root = null;
        this.parentNodes = [];
        this.currentSize = 0;
    }

    push(data, priority) {
        let newNode = new Node(data, priority);
        this.insertNode(newNode);
        this.shiftNodeUp(newNode);
        this.currentSize++;
    }

    pop() {
        if (this.currentSize>0) {
            let detach = this.detachRoot();
            this.restoreRootFromLastInsertedNode(detach);
            this.shiftNodeDown(this.root);
            this.currentSize--;
            return detach.data;
        }
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
        if (this.parentNodes.length > 0) {
            this.root = this.parentNodes.pop();
            if (this.root.parent != null) {
                if (this.root.parent.left === this.root) { this.root.parent.left = null; }
                if (this.root.parent.right === this.root) { this.root.parent.right = null; }
            }
            this.root.parent = null;
            if (detached.left != null && detached.left !== this.root) {
                this.root.left = detached.left;
                this.root.left.parent = this.root;
            }
            if (detached.right != null && detached.right !== this.root) {
                this.root.right = detached.right;
                this.root.right.parent = this.root;
            }
            if (this.parentNodes.length > 0) {
                if (this.parentNodes[this.parentNodes.length-1].parent.right === null) {
                    this.parentNodes.unshift(this.parentNodes[this.parentNodes.length-1].parent);
                }
            }
        }
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
            if(this.parentNodes[0].left != null && this.parentNodes[0].right != null) this.parentNodes.shift();
        }
    }

    shiftNodeUp(node) {
        if (node.parent != null) {
            if (node.priority > node.parent.priority) {
                let oldPidx = this.parentNodes.indexOf(node.parent);
                let parent = node.parent;
                let nPidx = this.parentNodes.indexOf(node);
                node.swapWithParent();
                if (oldPidx >= 0) {
                    this.parentNodes[oldPidx] = node;
                }
                if (nPidx >= 0) {
                    this.parentNodes[nPidx] = parent;
                }
                this.shiftNodeUp(node);
            }
        } else {
            this.root = node;
        }
    }

    shiftNodeDown(node) {
        if (node != null) {
            if (node.left != null || node.right != null) {
                if ((node.left != null && node.left.priority > node.priority) ||
                    (node.right !=null && node.right.priority > node.priority)) {
                    let isLeft = false;
                    let isRight = false;
                    let newParent = null;
                    let oldIdx = null;
                    let nIdx = null;
                    if (node.right != null) {
                        if (node.left.priority > node.right.priority) {
                            isLeft = true;
                        } else {
                            isRight = true;
                        }
                    } else {
                        isLeft = true;
                    }
                    if (isLeft) {
                        newParent = node.left;
                        oldIdx = this.parentNodes.indexOf(node.left);
                        nIdx = this.parentNodes.indexOf(node);
                        node.left.swapWithParent();
                    }
                    if (isRight) {
                        newParent = node.right;
                        oldIdx = this.parentNodes.indexOf(node.right);
                        nIdx = this.parentNodes.indexOf(node);
                        node.right.swapWithParent();
                    }
                    if (nIdx >= 0) {
                        this.parentNodes[nIdx] = newParent;
                    }
                    if (oldIdx >= 0) {
                        this.parentNodes[oldIdx] = node;
                    }
                    if (newParent.parent === null) this.root = newParent;
                    this.shiftNodeDown(node);
                }
            }
        }
    }
}

module.exports = MaxHeap;
