class DequeArrayLike {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  pushFront(item) {
    this.headIndex--;
    this.items[this.headIndex] = item;
    return this.size();
  }

  pushBack(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
    return this.size();
  }

  popFront() {
    if (this.isEmpty()) return null;
    const value = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return value;
  }

  popBack() {
    if (this.isEmpty()) return null;
    this.tailIndex--;
    const value = this.items[this.tailIndex];
    delete this.items[this.tailIndex];
    return value;
  }

  peekFront() {
    if (this.isEmpty()) return null;
    return this.items[this.headIndex];
  }

  peekBack() {
    if (this.isEmpty()) return null;
    return this.items[this.tailIndex - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.tailIndex - this.headIndex;
  }
}
