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
 * @return {boolean}
 */
function isBalanced(root) {
  if (!root) return true;

  function _isBalanced(root) {
    if (!root) return 0;

    const leftHeight = _isBalanced(root.left);
    const rightHeight = _isBalanced(root.right);

    if (leftHeight === false || rightHeight === false) return false;
    if (Math.abs(leftHeight - rightHeight) > 1) return false;

    return 1 + Math.max(leftHeight, rightHeight);
  }

  return _isBalanced(root) === false ? false : true;
};

// function isBalanced(root) {
//   if (!root) return true;

//   let nodeHeights = new Map();
//   const status = calcNodeHeights(root, nodeHeights);

//   return status === false ? false : true;
// };

// function calcNodeHeights(root, nodeHeights = new Map()) {
//   if (!root.left && !root.right) {
//     nodeHeights.set(root, 1);
//     return 1;
//   }

//   if (nodeHeights.has(root)) {
//     return nodeHeights.get(root);
//   }

//   let leftHeight = 0;
//   let rightHeight = 0;

//   if (root.left) {
//     leftHeight = calcNodeHeights(root.left, nodeHeights);
//     if (leftHeight === false) return false;
//   }

//   if (root.right) {
//     rightHeight = calcNodeHeights(root.right, nodeHeights);
//     if (rightHeight === false) return false;
//   }

//   if (Math.abs(leftHeight - rightHeight) > 1) return false;

//   const nodeHeight = 1 + Math.max(leftHeight, rightHeight);
//   nodeHeights.set(root, nodeHeight);
//   return nodeHeight;
// }