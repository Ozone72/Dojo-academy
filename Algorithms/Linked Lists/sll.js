function SLLNode(value) {
  this.val = value;
  this.next = null;
}
let node1 = new SLLNode(1);
// addFront
// Given a pointer to the first node in a list, and a value, create a new node, connect it to the head of the list, and return a pointer to the list’s new head node.
// addFront(firstNode, val) => newFirstNode
function addFront(firstNode, val) {
  var newFirstNode = new SLLNode(val);
  newFirstNode.next = firstNode;
  return newFirstNode;
}

// removeFront
// Given a pointer to the first node in a list, remove the head node and return the new list. If list is empty, return null.
// removeFront(firstNode) => newFirstNode
// function removeFront(firstNode) {
//   var newFirstNode = firstNode.next;
//   return newFirstNode;
// }
// console.log("removeFront(newFirstNode: ", removeFront(addFront(node1, 0)));

//contains
// Given a pointer to a listNode and a value, return true if value is found in the list.
function contains(listNode, value) {
  while (listNode) {
    console.log("listNode.val: ", listNode.val);
    if (listNode.val === value) {
      return true;
    }
    listNode = listNode.next;
  }
  return false;
}
// console.log("contains(newList, 1): ", contains(newList, 1));
// console.log("contains(newList, 0): ", contains(newList, 0));
// console.log("contains(newList, 2): ", contains(newList, 2));
console.log("addFront(newList, 2): ", addFront(newList, 2));
console.log("contains(newList, 2): ", contains(newList, 2));
