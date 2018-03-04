function SLLNode(value) {
  this.val = value;
  this.next = null;
}
let node1 = new SLLNode(1);
// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(firstNode, val) => newFirstNode
// function addFront(firstNode, val) {
//   var newFirstNode = new SLLNode(val);
//   newFirstNode.next = firstNode;
//   return newFirstNode;
// }
// console.log(addFront(node1, 0)); // => newFirstNode
