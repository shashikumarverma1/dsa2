class Node {
  constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
  }
}

function findMin(node) {
  if(node ==null){
    return -Infinity
  }
  let min =node.data
  let left=findMin(node.left)
  let right =findMin(node.right)
  return Math.max(min, left , right)
}

// Example usage:
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(20);
root.left.left = new Node(2);
root.left.right = new Node(8);
root.right.left = new Node(15);
root.right.right = new Node(25);

console.log("Minimum value in the binary tree is:", findMin(root));
