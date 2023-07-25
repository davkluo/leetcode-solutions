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

function isValidBST(
  root: TreeNode | null,
  min: number = -Infinity,
  max: number = Infinity
): boolean {
  // Base case
  if (root === null) {
    return true;
  }

  const isInValidPosition = root.val > min && root.val < max;
  const isValidLeftSide = isValidBST(root.left, min, root.val);
  const isValidRightSide = isValidBST(root.right, root.val, max);

  return isInValidPosition && isValidLeftSide && isValidRightSide;
}
