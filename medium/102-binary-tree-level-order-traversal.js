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
 * @return {number[][]}
 */
function levelOrder(root) {
  if (!root) return [];

  let traversalOutput = [];
  let queue = [[root, 0]];

  while (queue.length) {
    const [currNode, level] = queue.shift();

    // Add new subarray for level if needed
    if (traversalOutput.length <= level) traversalOutput.push([]);

    // Add node value to appropriate level
    traversalOutput[level].push(currNode.val);

    if (currNode.left) queue.push([currNode.left, level + 1]);
    if (currNode.right) queue.push([currNode.right, level + 1]);
  }

  return traversalOutput;
};