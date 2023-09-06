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
 * Given the root of a binary tree, return its diameter
 *
 * @param {TreeNode | null} root
 * @returns {number}
 */
function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;

  let diameter = 0;

  /** Returns height of tree given start (root) node; updates diameter */
  function dfs(start: TreeNode | null): number {
    if (!start) return 0;

    const leftHeight = dfs(start.left);
    const rightHeight = dfs(start.right);

    diameter = Math.max(diameter, leftHeight + rightHeight);

    return 1 + Math.max(leftHeight, rightHeight);
  }

  dfs(root);

  return diameter;
}

// Time: O(n), Space: O(log n) on average, worst case O(n) for unbalanced tree
