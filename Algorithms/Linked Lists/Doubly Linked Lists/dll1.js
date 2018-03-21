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
node1 = new DLNode(1);
node2 = new DLNode(2);
node3 = new DLNode(3);
node4 = new DLNode(4);

// chain nodes => .next to next node, .prev to previous node
node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;

// create a new list object
var dll_list = new DLList();
// set head and tail pointers
dll_list.head = node1;
// dll_list.tail = node1;
dll_list.tail = node4;

DLList.prototype.listLen = function listLen() {
  head = this.head;
  tail = this.tail;
  current = head;
  this.length = 1;
  while (current.next) {
    this.length++;
    current = current.next;
  }
  return this;
};
dll_list = dll_list.listLen();

DLList.prototype.prependValue = function prependValue(newVal, findVal) {
  head = this.head;
  before = this.head;
  tail = this.tail;
  after = this.head;
  newNode = new DLNode(newVal);
  // console.log("newNode: ", newNode);
  // will run while current.next doesn't equal null
  while (after.val !== findVal) {
    after = after.next;
    before = before.next;
  }
  // set before and after pointers, set NewNode pointers
  before = before.prev;
  newNode.next = after;
  newNode.prev = before;
  before.next = newNode;
  after.prev = newNode;
  // return the modified list object
  return this;
};

dll_list = dll_list.prependValue(5, 3).listLen();
console.log("dll_list: ", dll_list);

DLList.prototype.kthToLast = function kthToLast(k) {
  current = this.head;
  while (current) {
    current = current.next;
    if (current.next === null) {
      // stuff here
      for (let i = 1; i <= k; i++) {
        if (current.prev === null) {
          console.log("k's value:", k, " is longer than the list");
          return false;
        } else {
          current = current.prev;
        }
      }
      return this, current.val;
    }
  }
};

dll_list = dll_list.kthToLast(2);
console.log("dll_list: ", dll_list);

function isValidDlist(list) {
  // checks to see if this list passed in is structured correctly (has both .next and .prev and if list.head and list.tail are in the correct places)
  // IN: takes a list
  // OUT: returns a boolean
  // TEST: list exists; if single node, .next and .prev are both null.
  if (!list) {
    return false;
  } else {
    var current = list.head;
    var count = 1;
    while (current) {
      switch () {
        case !null:
          check = true;
          break;
        case null:
          check = true;
          break;

        default:
          break;
      }
      /* through each iteration where current.next isn't null, need to check:
      1) That there is a corresponding .prev
        a) if there isn't, then there is a next without a prev -> return false
        b)if there is, then keep going.
      the edge cases are when current.prev === null and when current.next === null
      need a separate case for both of those
      if (current.next && current.prev) {
        check = true;
      } else {
        check = false;
      */

    current = current.next;
    count+=1;
  }
}
isValidDlist(dll_list);

// Palindrome - Determine whether given DList nodes' values are a palindrome
// Takes a list
// Returns a boolean (true/false) if given list is a palindrome

// palindrome test nodes
// var palinNode1 = new DLNode("Do");
// var palinNode6 = new DLNode("Do");
// var palinNode2 = new DLNode("It.");
// var palinNode5 = new DLNode("It.");
// var palinNode3 = new DLNode("Now.");
// var palinNode4 = new DLNode("Now.");
// var palinNode5 = new DLNode("No Excuses.");

// // link nodes
// palinNode1.next = palinNode2;
// palinNode2.prev = palinNode1;
// palinNode2.next = palinNode3;
// palinNode3.prev = palinNode2;
// palinNode3.next = palinNode4;
// palinNode4.prev = palinNode3;
// palinNode4.next = palinNode5;
// palinNode5.prev = palinNode4;
// palinNode5.next = palinNode6;
// palinNode6.prev = palinNode5;
// // new list
// var palin_List = new DLList();
// palin_List.head = palinNode1;
// palin_List.tail = palinNode6;
// console.log(palin_List);
// function palindrome(list) {
//   // Need to read the list from head-> middle node <- tail and if values in each string match, then palindrome
//   // this is actually a really easy one.
//   if (list) {
//     var head = list.head;
//     // console.log("head: ", head);
//     var tail = list.tail;
//     var counter = 0;
//     while (head) {
//       head = head.next;
//       counter += 1;
//     }
//     for (let index = 0; index < counter / 2; index++) {}
//   }
// }

// console.log(palin_List);

// Loop start; Tortoise and Hare, Floyd's Cycling algorithm
// Given a dlist that may contain a loop
// return a pointer to where the node exists, or null if no loop
// function detectLoop(list) {
//   // key concept is to send 'turtle' forward 1 node, and 'hare' forward (or backwards) 2 nodes.  Eventually, they will either meet, or
//   // they will hit null pointers, signifying the end of the list.
//   //  Find the node (if a loop) where the racers meet up.  *that isn't necessarily the break point*
// }
