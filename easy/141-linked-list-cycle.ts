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
 * Given the head of a linked list, return true if it has a cycle
 *
 * @param {ListNode | null} head
 * @returns {boolean}
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;

  let slow = head;
  let fast = head;

  while (slow?.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

// Time: O(n), Space: O(1)
