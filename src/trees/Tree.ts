export class TreeNode<T> {
  value: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree<T = any> {
  root: TreeNode<T>;

  constructor(value: T) {
    this.root = new TreeNode(value);
  }

  /**
   *
   * @param value Value to be inserted in the tree
   * @returns this (method can be changed with other class methods or properties)
   */
  public insert(value: T): BinarySearchTree<T> {
    return this;
  }

  /**
   *
   * @param type indicates the type of tree traversal
   * @returns Array of each value stored in every node of the tree
   */
  public traverse(type?: "in-order" | "pre-order" | "post-order"): T[] {
    return [];
  }
}

const tree = new BinarySearchTree(20);
tree.traverse("in-order");
tree.insert(10).insert(10);
