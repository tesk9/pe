var LinkedList = function() {
  this.head = undefined;
  this.tail = undefined;
};

LinkedList.prototype.addToTail = function(value) {
  var node = new Node(value);
  if(this.tail) {
    this.tail.next = node;
  } else {
    this.head = node;
    this.tail = node;
  }
  this.tail = node;
  return this;
};

LinkedList.prototype.remove = function(node) {
  var store = node ? node.value : undefined;
  if(this.head === node) {
    if(this.head && this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = undefined;
      this.tail = undefined;
    }
  } else if(node.next) {
    var storeValue = node.next.value;
    var storePointer = node.next.next;
    node.next = storePointer;
    node.value = storeValue;
  } else if(this.tail === node) {
    // (Removing tail requires finding previous node)
    var that = this;
    this.applyToEach(function(testNode) {
      if(testNode.next === node) {
        that.tail = testNode;
        testNode.next = null;
      }
    });
  }
  return store;
};

LinkedList.prototype.applyToEach = function(callback) {
  var node = this.head;
  while(node) {
    callback(node);
    node = node.next;
  }
}

var Node = function(value) {
  this.value = value;
  this.next = null;
};


module.exports = LinkedList;
