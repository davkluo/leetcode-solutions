'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (root === null) return;
  if (root === p || root === q) return root;

  if (p.val > root.val) {
    if (q.val < root.val) return root;

    if (root.right) {
      const lcaRight = lowestCommonAncestor(root.right, p, q)

      if (lcaRight !== undefined) return lcaRight;
    }
  } else {
    if (q.val > root.val) return root;

    if (root.left) {
      const lcaLeft = lowestCommonAncestor(root.left, p, q)

      if (lcaLeft !== undefined) return lcaLeft;
    }
  }
};