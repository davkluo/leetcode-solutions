'use strict';

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function middleNode(head) {
  if (!head?.next) return head;

  let fast = head;
  let slow = head;

  while (fast) {
      if (!fast.next) return slow;

      fast = fast.next.next;
      slow = slow.next;
  }

  return slow;
};