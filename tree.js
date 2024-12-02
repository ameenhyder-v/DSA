class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}


// let a = new tree("a");
// let b = new tree("b");

// let c = new tree("c");
// let d = new tree("d");
// let e = new tree("e");



// a.left = b;
// a.right = c;
// b.left = e;


class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value)
        if (!this.root) {
            this.root = node;
        } else {
            let current = this.root;
            while (true) {
                if (value < current.value) {
                    if (!current.left) {
                        current.left = node;
                        break;
                    }

                    current = current.left;
                } else if (value > current.value) {
                    if (!current.right) {
                        current.right = node;
                        break;
                    }

                    current = current.right;
                }
            }
        }
    }

    contains(value) {
        let current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return true
            }
        }
        return false
    }

    containsRecursive(value, node = this.root) {
        if (!node) return false;

        if (value < node.value) {
            return this.containsRecursive(value, node.left);
        } else if (value > node.value) {
            return this.containsRecursive(value, node.right);
        } else {
            return true;
        }
    }


    inOrder(node = this.root) {
        if (node) {
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }

    preOrder(node = this.root) {
        if (node) {
            console.log(node.value);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    postOrder(node = this.root) {
        if (node) {
            this.postOrder(node.left);
            this.postOrder(node.right);
            console.log(node.value);
        }
    }

    remove(val, node = this.root) {
        if (!node) return null;

        if (val < node.value) {
            node.left = this.remove(val, node.left);
        } else if (val > node.value) {
            node.right = this.remove(val, node.right)
        } else {
            if(!node.left && !node.right) {
                return null;
            }

            if (!node.left) return node.right;
            if (!node.right) return node.left;

            const minrightNode = this.findMinNode(node.right);
            node.value = minrightNode.value;
            node.right = this.remove(minrightNode.value, node.right);
        }

        return node;
    }


    findMinNode(node) {
        if (!node.left) {
            return node;
        }
        return this.findMinNode(node.left);
    }

    getHight(node = this.root) {
        if (!node) return 0;

        let leftHight = this.getHight(node.left);
        let rightHight = this.getHight(node.right);

        return Math.max(leftHight, rightHight) + 1;
    }
}

let bst = new BST();

bst.insert(10);
bst.insert(8);
bst.insert(15);
bst.insert(6);
bst.insert(9);
bst.insert(14);
bst.insert(20);
bst.insert(3);
bst.insert(7);
bst.insert(12);
bst.insert(18);
bst.insert(30);
bst.insert(1);
bst.insert(4);

// bst.inOrder()
console.log('depth : ', bst.getHight())
console.log('contains 30 before: ' , bst.containsRecursive(30))

// bst.preOrder()
// bst.postOrder()
bst.remove(10)
bst.remove(30)
bst.inOrder()
console.log('contains 30 after: ', bst.containsRecursive(30))
console.log('depth : ', bst.getHight())



