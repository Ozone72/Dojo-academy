// Orin Fletcher
// Linked Lists
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
// console.log("current myList: ", myList);
// console.log("contains(myList, 42): => true", contains(myList, 42));
// console.log("contains(myList, 2): => true ", contains(myList, 2));
// console.log("contains(myList, -3): => false", contains(myList, -3));

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

// console.log("front(emptyList): ", front(emptyList));
// console.log("current myList: ", myList);
// console.log("front(myList): ", front(myList));

// ----------- Linked Lists 2 ----------------
function listLength(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  // if a node exists, it is counted.  So we start at one.  Don't confust with .length property (which is ONE PAST THE INDEX which start with 0)
  var counter = 1;
  var runner = firstNode.head;
  console.log("runner: ", runner);
  while (runner.next !== null) {
    counter++;
    // console.log("counter: ", counter);
    runner = runner.next;
  }
  return counter;
}
// console.log("listLength(emptyList): ", listLength(emptyList));
// console.log("myList: ", myList);
// console.log("listLength(myList): ", listLength(myList));

// average
// Create a standalone function average(node) that returns (…wait for it … ) the average of all values contained in that list.
// average(node) => value
function average(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  var runner = firstNode.head;
  var sumValues = 0;
  var count = 0;
  while (runner.next !== null) {
    if (runner.val) {
      count++;
      // console.log(count);
    }
    // console.log("sumValues: ", sumValues);
    // console.log("runner.val: ", runner.val);
    sumValues = sumValues + runner.val;
    // console.log("sumValues + runner.val: ", sumValues);

    runner = runner.next;
  }
  // console.log("sumValues: ", sumValues);
  // console.log("count: ", count);
  return sumValues / count;
}
// console.log("average(myList): ", average(myList));

// min, max
// Create function min(node) and max(node) to returning smallest and largest values in the list.
// min(node) => minValue
function minNodeValue(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  // runner for traversal
  var runner = firstNode.head;
  var min = runner.val;
  // console.log("min: ", min);
  while (runner.next !== null) {
    if (runner.val < min) {
      min = runner.val;
    }
    runner = runner.next;
  }
  return min;
}
console.log("minNodeValue(myList): ", minNodeValue(myList));
// max(node) => maxValue
function maxNodeValue(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  // runner for traversal
  var runner = firstNode.head;
  var max = runner.val;
  // console.log("max: ", max);
  while (runner.next !== null) {
    if (runner.val > max) {
      max = runner.val;
    }
    runner = runner.next;
  }
  return max;
}
console.log("maxNodeValue(myList): ", maxNodeValue(myList));

// display
// Create display(node) for debugging that returns a string containing all list values. Build what you wish console.log(myList) did!
// display(node) => String (contains list values)
function displayNodes(firstNode) {
  if (!firstNode || !firstNode.head) {
    return null;
  }
  var displayStr = `List has a head pointer\n`;
  var count = 1;
  // runner for traversal
  var runner = firstNode.head;
  while (runner.next !== null) {
    if (runner.val) {
      displayStr += `Node #: ${count}, Value: ${runner.val}\n`;
    }
    runner = runner.next;
    count++;
  }
  displayStr += `Node #: ${count}, Value: ${runner.val}`;
  return displayStr;
}
console.log("displayNodes(myList): ", displayNodes(myList));
console.log("displayNodes(emptyList): ", displayNodes(emptyList));
