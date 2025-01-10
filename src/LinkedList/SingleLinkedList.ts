class ListNode {
  value: any;
  next: ListNode | null;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

export class SingleLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: any) {
    const newListNode = new ListNode(value);
    if (!this.head) {
      this.head = newListNode;
      this.tail = newListNode;
    } else {
      this.tail!.next = newListNode;
      this.tail = newListNode;
    }
    this.length++;
    return this;
  }

  shift() {}

  pop() {
    if (!this.length) return undefined;
    let current = this.head;
    // while (current) {}
  }

  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}
