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
 * Given two sorted lists, merge them into a new sorted list
 *
 * @param {ListNode | null} list1
 * @param {ListNode | null} list2
 * @returns {ListNode | null}
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1 && !list2) return null;

  const prev = new ListNode();
  let curr = prev;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      curr.next = list2;
      list2 = list2.next;
    } else {
      curr.next = list1;
      list1 = list1.next;
    }

    curr = curr.next;
  }

  curr.next = list1 ? list1 : list2;
  return prev.next;
}

// Time: O(n), Space: O(1)
