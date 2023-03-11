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
 * @return {number}
 */
function diameterOfBinaryTree(root) {
  if (!root) return 0;

  let maxDiameter = 0;
  let heightMap = new Map();
  let stack = [root];

  while (stack.length) {
    const currNode = stack.pop();

    let leftHeight = 0;
    let rightHeight = 0;

    if (currNode.left) {
      stack.push(currNode.left);
      leftHeight = maxHeight(currNode.left);
    }

    if (currNode.right) {
      stack.push(currNode.right);
      rightHeight = maxHeight(currNode.right);
    }

    const nodeDiameter = leftHeight + rightHeight;
    maxDiameter = Math.max(maxDiameter, nodeDiameter);

  }

  function maxHeight(node) {
    if (heightMap.has(node)) return heightMap.get(node);

    if (!node.left && !node.right) {
      heightMap.set(node, 1);
      return 1;
    }

    let leftHeight = 0;
    let rightHeight = 0;

    if (node.left) leftHeight = maxHeight(node.left);
    if (node.right) rightHeight = maxHeight(node.right);

    const height = Math.max(leftHeight, rightHeight) + 1;
    heightMap.set(node, height);
    return height;
  }

  return maxDiameter;
};