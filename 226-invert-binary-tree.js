'use strict';

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function invertTree(root) {
  if (root) {
      _invert(root);
  }

  function _invert(node) {
    // if a node has no children, it doesn't do any swapping
    if (!node.left && !node.right) return;

    // node has at least one child, so swap
    [node.left, node.right] = [node.right, node.left];

    if (node.left) _invert(node.left);
    if (node.right) _invert(node.right);
  }

  return root;
}