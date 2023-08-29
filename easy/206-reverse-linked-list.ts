/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Given a linked list, reverse it and return the new head
 *
 * @param {ListNode | null} head
 * @returns {ListNode | null}
 */
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  let prev: ListNode | null = null;
  let next: ListNode | null = head.next;

  while (head) {
    head.next = prev;

    prev = head;
    head = next;
    next = next?.next ?? null;
  }

  return prev;
}
