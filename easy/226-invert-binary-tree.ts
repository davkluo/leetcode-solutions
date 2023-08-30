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
 * Given the root of a binary tree, inverts the tree and returns its root
 *
 * @param {TreeNode | null} root
 * @returns {TreeNode | null}
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root || (!root.left && !root.right)) return root;

  const left = root.left;
  const right = root.right;

  root.left = invertTree(right);
  root.right = invertTree(left);

  return root;
}

// Time: O(n), Space: O(log n) average, O(n) worst case
