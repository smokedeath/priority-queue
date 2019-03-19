class Node {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
        this.parent = null;
        this.left = null;
        this.right = null;
    }

    appendChild(node) {
        if (this.left == null) {
            this.left = node;
            node.parent = this;
        } else
        if (this.left != null && this.right == null) {
            this.right = node;
            node.parent = this;
        }
    }

    removeChild(node) {
        if (node === this.left) {
            this.left = null;
            node.parent = null;
        } else
        if (node === this.right) {
            this.right = null;
            node.parent = null;
        } else {
            throw "Error";
        }
    }

    remove() {
        if (this.parent != null) this.parent.removeChild(this);
    }

    swapWithParent() {
        if (this.parent != null) {
            let pr = this.parent;
            let oPr = {};
            oPr['parent'] = pr.parent;
            oPr['left'] = pr.left;
            oPr['right'] = pr.right;
            let oCl = {};
            oCl['parent'] = this.parent;
            oCl['left'] = this.left;

            this.parent = oPr['parent'];
            pr.parent = this;
            if (pr.left!=null && pr.left!==this) pr.left.parent = this;
            if (pr.right!=null && pr.right!==this) pr.right.parent = this;
            if (this===oPr['left']) {
                this.left = pr;
                this.right = pr.right;
            } else if (this===oPr['right']) {
                this.left = pr;
                this.left = pr.left;
            }
            pr.left = oCl['left'];
            pr.right = oCl['right'];

            oPr = null;
            oCl = null;
        }
    }
}

module.exports = Node;
