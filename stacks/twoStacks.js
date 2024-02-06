//!! 2 stacks in an array
class TwoStack {
  constructor() {
    this.array = new Array(10);
    this.top1 = 0;
    this.top2 = this.array.length - 1;
  }
  push1(element) {
    if (this.top1 === this.top2 + 1) {
      console.log("stack 1 is full");
    } else {
      this.array[this.top1] = element;
      this.top1++;
    }
  }
  push2(element) {
    if (this.top1 === this.top2 + 1) {
      console.log("stack  2 is full");
    } else {
      this.array[this.top2] = element;
      this.top2--;
    }
  }
  pop1() {
    if (this.top1 === 0) {
      console.log("stack 1 is empty can't pop");
    } else {
      this.top1--;
    }
  }
  pop2() {
    if (this.top2 === this.array.length - 1) {
      console.log("stack 2 is empty can't pop");
    } else {
      this.top2++;
    }
  }
}

const twostack = new TwoStack();
twostack.push1(3);
twostack.push1(13);
twostack.push2(103);
twostack.push1(23);

twostack.push1(33);
twostack.push1(33);
twostack.push2(93);
twostack.push2(83);
twostack.push2(73);
console.log(twostack);
