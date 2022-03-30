class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }
  get front() {
    return this.items[this.top];
  }
  get size() {
    return this.top + 1;
  }
  push(value) {
    this.top += 1;
    this.items[this.top] = value;
  }
  pop() {
    delete this.items[this.top];
    this.top -= 1;
  }
}
describe("Stack initialisation", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  test("init", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  test("push mtd", () => {
    stack.push(5);
    expect(stack.size).toBe(1);
    expect(stack.front).toEqual(5);
  });
  test("pop mtd", () => {
    stack.push(5);
    stack.pop();
    expect(stack.size).toBe(0);
    expect(stack.top).toBe(-1);
  });
});
