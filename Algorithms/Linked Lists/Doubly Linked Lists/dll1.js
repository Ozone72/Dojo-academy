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
// set head and tail pointers
dll_list.head = node1;
// dll_list.tail = node1;
dll_list.tail = node4;

// function prependValue(list, newVal, findVal) {
//   var current = list.head;
//   if (!list || !newVal || !findVal) {
//     console.log("missing param(s), returning false");
//     return false;
//   }
//   var newNode = new DLNode(newVal);
//   // will run while current.next doesn't equal null
//   while (current) {
//     if (current.val === findVal) {
//       if (current.prev == null) {
//         newNode.next = current;
//         // console.log("here");
//         current.prev = newNode;
//         list.head = newNode;
//       } else {
//         after = current;
//         before = current.prev;
//         before.next = newNode;
//         newNode.prev = before;
//         newNode.next = after;
//         after.prev = newNode;
//       }
//     }
//     current = current.next;
//   }
//   return list;
// }
// prependValue(dll_list, 3.5, 4);
// console.log("prependValue(dll_list, 42, 3): ", prependValue(dll_list, 42, 3));
// prependValue(dll_list, "Life, the Universe, and Everything", 42);
// prependValue(dll_list, "Douglas Adams", 1);

// function kthToLast(list, k) {
//   if (!list || !k) {
//     return false;
//   } else {
//     var current = list.head;
//     while (current) {
//       current = current.next;
//       if (current.next === null) {
//         // stuff here
//         for (let i = 1; i <= k; i++) {
//           if (current.prev === null) {
//             console.log("k's value:", k, " is longer than the list");
//             return false;
//           } else {
//             current = current.prev;
//           }
//         }
//         return current.val;
//       }
//     }
//   }
// }

// console.log("kthToLast(dll_list, 2): ", kthToLast(dll_list, 2));
// console.log("kthToLast(dll_list,4): ", kthToLast(dll_list, 4));
// console.log("kthToLast(dll_list,5): ", kthToLast(dll_list, 5));

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
      // through each iteration where current.next isn't null, need to check:
      // That there is a corresponding .prev
      // if there isn't, then there is a next without a prev -> return false
      // if there is, then keep going.
      // the edge cases are when current.prev === null and when current.next === null
      // need a separate case for both of those
      // if (current.next && current.prev) {
      //   check = true;
      // } else {
      //   check = false;
      // }
      
    current = current.next;
    count+=1;
  }
}
isValidDlist(dll_list);
