// Orin Flether
// Algos IV
// Binary Trees

// tree node or branch
function bTNode(value) {
  this.val = value;
  this.left = null;
  this.right = null;
}
// tree object
function bTree() {
  this.root = null;
}

bTree.prototype.contains = function contains(val) {
  console.log("val: ", val);
  // check for a tree
  if (this) {
    //   set current pointer equal to root
    current = this;
    console.log("current: ", current);
    console.log("current.left.val: ", current.left.val);
    console.log("current.right.val: ", current.right.val);
    // check against .left first
    if (val === current.val) {
      this.root = current;
      return this, true;
    }
    if (val < current.val) {
      current = current.left;
      console.log("current: ", current);
      current.contains(val);
    }
  } else {
    return null;
  }
};

bTNode1 = new bTNode(5);
bTNode2 = new bTNode(4);
bTNode3 = new bTNode(7);
// bTNode4 = new bTNode(2);
// bTNode5 = new bTNode(10);

bTNode1.left = bTNode2;
bTNode1.right = bTNode3;

myBst = new bTree();
myBst.root = bTNode1;
console.log("myBst: ", myBst);
myBst.contains(4);
