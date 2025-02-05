class TreeNode {
  public val: number;
  public left: TreeNode | null;
  public right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) return true;

  if (p?.val !== q?.val) return false;

  return isSameTree(p?.left!, q?.left!) && isSameTree(p?.right!, q?.right!);
}

const result: boolean = isSameTree(new TreeNode(1, new TreeNode(2), new TreeNode(4)), new TreeNode(1, new TreeNode(2), new TreeNode(4)));

console.log(result);
