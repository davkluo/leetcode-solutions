// Definition for a binary tree node.
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
 * Given a binary tree, find the lowest common ancestor of two nodes
 *
 * @param root
 * @param p
 * @param q
 * @returns - Lowest common ancestor node
 */

function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode
): TreeNode {
  let lca: TreeNode = root;
  let isSearching: boolean = true;

  /** Should return true if a node is found, false if not */
  function _lca(root: TreeNode | null): boolean {
    if (!root) return false;

    let nodesFound = 0;

    if (root === p || root === q) nodesFound++;
    if (_lca(root.left)) nodesFound++;
    if (_lca(root.right)) nodesFound++;

    if (nodesFound == 2 && isSearching) {
      lca = root;
      isSearching = false;
    }

    return nodesFound > 0;
  }

  _lca(root);

  return lca;
}

// ALTERNATIVE

// function lowestCommonAncestor(
//   root: TreeNode | null,
//   p: TreeNode | null,
//   q: TreeNode | null
// ): TreeNode | null {
//   if (!root) return null;

//   if (root === p || root === q) return root;

//   const left = lowestCommonAncestor(root.left, p, q);
//   const right = lowestCommonAncestor(root.right, p, q);

//   if (left && right) return root;
//   if (left) return left;
//   if (right) return right;

//   return null;
// }
