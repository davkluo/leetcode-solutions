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

/**
 * Given a binary tree, determines if it is height-balanced
 *
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
function isBalanced(root: TreeNode | null): boolean {
  if (!root) return true;

  let isHeightBalanced = true;

  /** Modifies isHeightBalanced if the subtree is unbalanced; returns height */
  function dfs(start: TreeNode | null): number {
    if (!start) return 0;

    const leftHeight = dfs(start.left);
    const rightHeight = dfs(start.right);

    if (Math.abs(leftHeight - rightHeight) > 1) {
      isHeightBalanced = false;
    }

    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);

  return isHeightBalanced;
}

// Time: O(n), Space: O(log n) on average, worst case O(n) for unbalanced tree
