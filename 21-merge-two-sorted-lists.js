/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
  let temp1 = list1;
  let temp2 = list2;

  let head = null;
  let curr;
  let next;

  while (temp1 !== null || temp2 !== null) {
    if (temp1 === null) {
      next = temp2;
      temp2 = temp2.next;
    } else if (temp2 === null) {
      next = temp1;
      temp1 = temp1.next;
    } else {
      if (temp1.val < temp2.val) {
        next = temp1;
        temp1 = temp1.next;
      } else {
        next = temp2;
        temp2 = temp2.next;
      }
    }

    if (head === null) {
      curr = next;
      head = curr;
    } else {
      curr.next = next;
      curr = next;
    }
  }

  return head;
}