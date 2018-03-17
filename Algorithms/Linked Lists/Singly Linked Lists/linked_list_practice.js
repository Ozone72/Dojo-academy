function SLLNode(value) {
  this.val = value;
  this.next = null;
}

node1 = new SLLNode(1);
node2 = new SLLNode(2);
node3 = new SLLNode(3);
node4 = new SLLNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;

function SLList() {
  this.head = null;
}

myList_null = new SLList();
myList = new SLList();
myList.head = node1;

SLList.prototype.listLen = function listLen() {
  currentNode = this.head;
  this.len = 1;
  if (!currentNode) {
    return null;
  }
  while (currentNode.next) {
    currentNode = currentNode.next;
    this.len++;
  }
  return this, this.len;
};

// var len_myList_null = myList_null.listLen();
// console.log("len_myList_null: ", len_myList_null);
// var len_myList = myList.listLen();
// console.log("len_myList: ", len_myList);

SLList.prototype.addFront = function addFront(value) {
  //   console.log(this.head);
  var newNode = new SLLNode(value),
    currentNode = this.head;
  if (!currentNode) {
    this.head = newNode;
    this.listLen();
    return this, newNode;
  }
  this.head = newNode;
  newNode.next = currentNode;
  this.listLen();
  return this, newNode;
};

myList.addFront(420);

// myList_null.addFront(1);
// console.log("myList_null: ", myList_null);
console.log("myList: ", myList);

SLList.prototype.removeFront = function removeFront() {
  currentNode = this.head;
  if (!currentNode) {
    return null;
  }
  currentNode = currentNode.next;
  //   debugger;
  this.head = currentNode;
  this.listLen();
  return this, currentNode;
};

myList.removeFront();
// console.log("myList: ", myList);

SLList.prototype.frontVal = function frontVal() {
  currentNode = this.head;
  return this, currentNode.val;
};

var val = myList.frontVal();
console.log("val: ", val);

SLList.prototype.splitOnVal = function splitOnVal(num) {
  currentNode = this.head;
  while (currentNode) {
    if (currentNode.val === num) {
      this.head = currentNode;
      this.listLen();
      return this;
    }
    currentNode = currentNode.next;
  }
};
var split = myList.splitOnVal(3);
console.log("split: ", split);
