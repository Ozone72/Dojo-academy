// Orin Fletcher
// Algos IV

// function sLNode(value) {
//   this.val = value;
//   this.next = null;
// }

// function SLList() {
//   this.head = null;
// }

// node1 = new sLNode(1);
// node2 = new sLNode(2);
// node3 = new sLNode(3);
// node4 = new sLNode(4);
// node5 = new sLNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;

// myList = new SLList();
// myList.head = node1;

// SLList.prototype.displayList = function displayList() {
//   current = this.head;
//   count = 1;
//   while (current) {
//     console.log("node" + count + " = " + current.val);
//     // console.log("current: ", current);
//     current = current.next;
//     count++;
//   }
// };

/* rListLength
Given the first node of a singly linked list,
create a recursive function that returns the number of nodes in that list.
You can assume the list contains no loops, and that it is short enough that you will not
‘blow your stack’. */
// THIS WILL DESTROY THE LIST YOU PASS IN WITHOUT AN ADDITIONAL PARAM
// function rListlength(node, len = 0) {
//   // BASE CASE
//   // when the head finally points to null, we're out of nodes to count, and all the recursions will execute to return len
//   if (!node.head) {
//     return len;
//   }
//   // FORWARD PROGRESS => have to move up the head pointer to advance the count, or have a second parameter to track the current node.
//   // otherwise it will get wiped on every recursive call
//   let temp = node.head;
//   // move head forward.
//   node.head = temp.next;
//   // set temp.next = null(will be garbage collected, as we've detached the node)
//   temp.next = null;
//   // add to len property
//   len++;

//   return rListlength(node, len);
// }
// console.log("rListlength(myList)=> should be 5: ", rListlength(myList));
// console.log(myList);

// Doesn't kill (mutate) the list object when executed
// function noKillListLen(list, currentHead, len = 0) {
//   // console.log("list: ", list);
//   // console.log("currentHead: ", currentHead);
//   // console.log("len: ", len);
//   //  BASE CASE - IF currentHead DOESN'T EXIST (SHOULD BE A POINTER TO HEAD)
//   if (!currentHead) {
//     return len;
//   }
//   len++;
//   currentHead = currentHead.next;
//   return noKillListLen(list, currentHead, len);
// }
// console.log(
//   "noKillListLen(myList, myList.head, len): ",
//   noKillListLen(myList, myList.head)
// );
// console.log("myList: ", myList);

// Recursive “Tribonacci”
// Write a function rTrib(num) that mimics the Fibonacci sequence,
// but adds the previous three values instead of the previous two values.
// Consider the first three (num = 0, num = 1, num = 2) Tribonacci numbers to be 0, 0 and 1.
// Thus, rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4).
// Handle negatives and non-integers appropriately and inexpensively.
// function rTrib(num) {
//   // BASE CASES (FIRST 3 IN TRIB SEQUENCE)
//   if (num < 2) {
//     return 0;
//   }
//   if (num === 2) {
//     return 1;
//   }
//   // count++;
//   // FORWARD PROGRESS + RECURSIVE CALLS
//   // remember that each call needs to resolve to it's num FIRST, then gets added
//   return rTrib(num - 1) + rTrib(num - 2) + rTrib(num - 3);
// }
// console.log("rTrib(3): ", rTrib(3));
// console.log("rTrib(4): ", rTrib(4));
// console.log("rTrib(5): ", rTrib(5));
// console.log("rTrib(6): ", rTrib(6));
// console.log("rTrib(7): ", rTrib(7));
