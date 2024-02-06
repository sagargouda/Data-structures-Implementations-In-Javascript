//!! stack implementation
class Stack {
  constructor() {
    this.array = new Array(127);
    this.top = -1;
  }
  push(element) {
    // if stack is not full
    if (this.array.length - this.top > 1) {
      this.top++;
      this.array[this.top] = element;
    } else {
      console.log("Stack is full brother");
    }
  }
  pop() {
    // if there is no element to pop
    if (this.top === -1) {
      console.log("stack is empty brother");
    } else {
      this.top--;
    }
  }
  peek() {
    // check if stack has element
    if (this.top === -1) {
      console.log("Stack is empty");
    } else {
      return this.array[this.top];
    }
  }
  getSize() {
    return this.top + 1;
  }
  isEmpty() {
    if (this.top === -1) {
      return true;
    } else {
      return false;
    }
  }
}

const newStack = new Stack();
newStack.push(20);
newStack.push(30);
newStack.push(40);
newStack.push(50);
newStack.push(60);

while (!newStack.isEmpty()) {
  console.log(newStack.peek());
  newStack.pop();
}
