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

function isSymmetric(root: TreeNode | null): boolean {
  function isSameTree(tree1: TreeNode | null, tree2: TreeNode | null): boolean {
    if (tree1 == null && tree2 == null) {
      return true; // Eğer burada iki ağaçta nullsa zaten demekki ikiside aynıdır.
    }

    if (tree1 == null || tree2 == null) return false; // biri null biri değilse zaten mirror değildir.

    if (tree1.val != tree2.val) return false;

    return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right);
  }

  return isSameTree(root?.left!, root?.right!);
}

let tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);

let result1 = isSymmetric(tree1);
console.log(result1);
