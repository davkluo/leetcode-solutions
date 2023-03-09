'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function hasCycle(head) {
  let seen = new Set();

  let curr = head;
  while (curr) {
    if (seen.has(curr)) return true;

    seen.add(curr);
    curr = curr.next;
  }

  return false;
};

// Using fast and slow pointers, O(1) space:
function hasCycle(head) {
  let fast = head;
  let slow = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}