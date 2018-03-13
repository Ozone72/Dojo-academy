// Orin Fletcher
// Linked Lists 1
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

// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(firstNode, val) => newFirstNode
function addFront(firstNode, val) {
  // create a new head node
  var newHeadNode = new SLLNode(val);
  // point new node to firstNode;
  newHeadNode.next = firstNode;
  return newHeadNode;
}
var nodeski = addFront(node1, 42);
// console.log(nodeski);
nodeski = addFront(nodeski, "Life the U and Evrehthing");
// console.log(nodeski);

// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
// removeFront(firstNode) => newFirstNode
function removeFront(firstNode) {
  // check for empty list
  if (firstNode.head === null || !firstNode) {
    return null;
  }
  var newHeadNode = firstNode.next;
  return newHeadNode;
}
// console.log("nodeski before: ", nodeski);
nodeski = removeFront(nodeski);
// console.log("nodeski after removeFront: ", nodeski);

//contains
// Given a pointer to a listNode and a value, return true if value is found in the list.
// contains(firstNode, value)=>bool
function contains(firstNode, value) {
  if (!firstNode) {
    return false;
  } else {
    // set the runner at his mark (head)
    var runner = firstNode.head;
    // while runner is traversing the list
    while (runner) {
      // if the value is found, return true
      if (runner.val === value) {
        return true;
      }
      // otherwise, keep looking
      runner = runner.next;
    }
    return false;
  }
}
var myList = new SLList();
myList.head = nodeski;
console.log("current myList: ", myList);
console.log("contains(myList, 42): => true", contains(myList, 42));
console.log("contains(myList, 2): => true ", contains(myList, 2));
console.log("contains(myList, -3): => false", contains(myList, -3));

// front
// Return the value (not the node) at the head of the list. If list is empty, return null.
// front(firstNode) => val or null
function front(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  return firstNode.head.val;
}
var emptyList = new SLList();
front(emptyList);

console.log("front(emptyList): ", front(emptyList));
console.log("current myList: ", myList);
console.log("front(myList): ", front(myList));
