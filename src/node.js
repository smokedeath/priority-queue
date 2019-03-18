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
		if (node.data === this.left.data && node.priority === this.left.priority) {
			this.left = null;
            node.parent = null;
		} else
			if (node.data === this.right.data && node.priority === this.right.priority) {
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
			//
		}
	}
}

module.exports = Node;
