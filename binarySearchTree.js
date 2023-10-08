// values to add 50, 76, 21, 4, 32, 100, 64, 52

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left_child = null;
        this.right_child = null;
    }

    insert_node(value) {
        if (value <= this.value && this.left_child) {
            this.left_child.insert_node(value);
        } else if (value <= this.value) {
            this.left_child = new BinarySearchTree(value);
        } else if (value > this.value && this.right_child) {
            this.right_child.insert_node(value);
        } else {
            this.right_child = new BinarySearchTree(value);
        }
    }

    find_node(value) {
        if (value < this.value && this.left_child) {
            return this.left_child.find_node(value);
        }

        if (value > this.value && this.right_child) {
            return this.right_child.find_node(value);
        }

        return value === this.value;
    }
}

const bst = new BinarySearchTree(15);

bst.insert_node(10);
bst.insert_node(8);
bst.insert_node(12);
bst.insert_node(20);
bst.insert_node(17);
bst.insert_node(25);
bst.insert_node(19);

console.log(bst.find_node(15));
console.log(bst.find_node(10));
console.log(bst.find_node(8));
console.log(bst.find_node(12));
console.log(bst.find_node(20));
console.log(bst.find_node(17));
console.log(bst.find_node(25));
console.log(bst.find_node(19));
