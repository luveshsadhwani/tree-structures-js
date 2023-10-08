class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left_child = null;
        this.right_child = null;
    }

    insert_left(value) {
        if (this.left_child === null) {
            this.left_child = new BinaryTree(value);
        } else {
            const new_node = new BinaryTree(value);
            new_node.left_child = this.left_child;
            this.left_child = new_node;
        }
    }

    insert_right(value) {
        if (this.right_child === null) {
            this.right_child = new BinaryTree(value);
        } else {
            const new_node = new BinaryTree(value);
            new_node.right_child = this.right_child;
            this.right_child = new_node;
        }
    }

    pre_order() {
        console.log(this.value);

        if (this.left_child) {
            this.left_child.pre_order();
        }

        if (this.right_child) {
            this.right_child.pre_order();
        }
    }

    in_order() {
        if (this.left_child) {
            this.left_child.in_order();
        }

        console.log(this.value);

        if (this.right_child) {
            this.right_child.in_order();
        }
    }

    post_order() {
        if (this.left_child) {
            this.left_child.post_order();
        }

        if (this.right_child) {
            this.right_child.post_order();
        }

        console.log(this.value);
    }
}

const a_node = new BinaryTree("a");
a_node.insert_left("b");
a_node.insert_right("c");

const b_node = a_node.left_child;
b_node.insert_right("d");

const c_node = a_node.right_child;
c_node.insert_left("e");
c_node.insert_right("f");

const d_node = b_node.right_child;
const e_node = c_node.left_child;
const f_node = c_node.right_child;

// console.log(a_node.value);
// console.log(b_node.value);
// console.log(c_node.value);
// console.log(d_node.value);
// console.log(e_node.value);
// console.log(f_node.value);
a_node.in_order();
