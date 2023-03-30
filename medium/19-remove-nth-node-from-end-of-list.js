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
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
  if (!head) return null;

  let frontNode = head;
  let backNode = head;
  let prevNode = null;

  for (let i = 0; i < n; i ++) {
    frontNode = frontNode.next;
  }

  while (frontNode) {
    frontNode = frontNode.next;
    prevNode = backNode;
    backNode = backNode.next;
  }

  // If deleting head, move head to the next node
  if (backNode === head) {
    head = head.next;
  }
  // If deleting last node, make prevNode.next null
  else if (!backNode.next) {
    prevNode.next = null;
  }
  else {
    prevNode.next = backNode.next;
  }

  return head;
};