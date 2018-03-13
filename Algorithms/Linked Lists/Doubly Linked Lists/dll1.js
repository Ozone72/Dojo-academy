function DLNode(value) {
  if (!(this instanceof DLNode)) {
    return new DLNode(value);
  }
  this.val = value;
  this.prev = null;
  this.next = null;
}

function DLList() {
  if (!(this instanceof DLList)) {
    return new DLList();
  }
  this.head = null;
  this.tail = null;
}

// create node objects
var node1 = new DLNode(1);
var node2 = new DLNode(2);
var node3 = new DLNode(3);
var node4 = new DLNode(4);

// chain nodes => .next to next node, .prev to previous node
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;

// create a new list object
var dll_list = new DLList();
dll_list.head = node1;
// dll_list.tail = node1;
dll_list.tail = node4;

function prependValue(list, newVal, findVal) {
  var current = list.head;
  if (!list || !newVal || !findVal) {
    console.log("missing param(s), returning false");
    return false;
  }
  var newNode = new DLNode(newVal);
  // will run while current.next doesn't equal null
  while (current) {
    if (current.val === findVal) {
      if (current.prev == null) {
        newNode.next = current;
        // console.log("here");
        current.prev = newNode;
        list.head = newNode;
      } else {
        after = current;
        before = current.prev;
        before.next = newNode;
        newNode.prev = before;
        newNode.next = after;
        after.prev = newNode;
      }
    }
    current = current.next;
  }
  return list;
}
console.log(prependValue(dll_list, 3.5, 4));
console.log(prependValue(dll_list, 42, 3));
console.log(prependValue(dll_list, "Life, the Universe, and Everything", 42));
console.log(prependValue(dll_list, "Douglas Adams", 1));
