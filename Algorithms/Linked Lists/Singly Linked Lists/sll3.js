// Orin Fletcher
// Linked Lists 3 -
//Node object for Singly Linked List
function SLLNode(value) {
  this.val = value;
  this.next = null;
}
// create some nodes
var node1 = new SLLNode(1);
// console.log("node1: ", node1);
var node2 = new SLLNode(2);
// console.log("node2: ", node2);
var node3 = new SLLNode(3);
// console.log("node3: ", node3);
var node4 = new SLLNode(4);
// console.log("node4: ", node4);

// chain 'em up
node1.next = node2;
// console.log("node1.next: ", node1.next);
node2.next = node3;
// console.log("node2.next: ", node2.next);
node3.next = node4;
// console.log("node3.next: ", node3.next);

// Singly Linked List Object constructor _length variable for counting length of lists.
function SLList() {
  this.head = null;
}

// create a new Singly Linked List instance
var newList = new SLList();

// set head to first node
newList.head = node1;
// console.log("newList: ", newList);
