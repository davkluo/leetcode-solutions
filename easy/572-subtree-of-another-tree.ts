/**
 * Definition for a binary tree node.
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/** Helper function taken from 100-same-tree.ts
 * Given the root of two binary trees, determine if they are the same
 *
 * @param {TreeNode | null} p
 * @param {TreeNode | null} q
 * @returns {boolean}
 */
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
}

/**
 * Given two trees, determine if one is a subtree of the other
 *
 * @param {TreeNode | null} root
 * @param {TreeNode | null} subRoot
 * @returns {boolean}
 */
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) return true;
  if (!root || !subRoot) return false;

  if (root.val === subRoot.val && isSameTree(root, subRoot)) return true;

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}

// Time: O(m * n), Space: O(log m) on average and O(m) in the worst case, where
// m is the number of nodes in root and n is the number of nodes in subRoot
