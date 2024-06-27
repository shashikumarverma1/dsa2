class TreeNode{
  constructor (value){
    this.value=value
    this.left=null
    this.right=null
  }
}
let arr=[1,2,3,4,5,6,7,8]
function arrTobt(A ){
    if(A.length ===0 ){
      return null
    }
    let mid=Math.floor(A.length / 2)

    const root= new TreeNode(A[mid])
    // console.log(root)
     root.left= arrTobt(A.slice(0,mid-1))
     root.right=arrTobt(A.slice(mid+1))
     return root
}
// console.log(arrTobt(arr))
let bt=arrTobt(arr)
// console.log(bt)
const bt_to_arr=(root)=>{
 
  let result=[]
 function traverse(node){
  if(node !==null){
   
    traverse(node.left)
    
    traverse(node.right)
    result.push(node.value)
  }
 
  }
  traverse(root)
  return result

}
// console.log(bt_to_arr(bt))
const hight_Bt=(root)=>{
  if(root ==null){
  return null
  }
  const left=hight_Bt(root.left)
  const right =hight_Bt(root.right)
  return Math.max(left , right ) + 1

}
// console.log(hight_Bt(bt))



const isSameBt=(b1,b2)=>{
  if(b1 && !b2 || !b1 && b2){
    return false
  }
  if(b1?.value !==b2?.value){
    return false
  }
  let b1left=isSameBt(b1?.left)
  let b1right=isSameBt(b1?.right)
  let b2left=isSameBt(b2?.left)
  let b2right=isSameBt(b2?.right)
  return (b1left == b2left) && (b1right == b2right)
}

console.log(isSameBt(bt, bt))

const levelOrderTraversal = (root) => {
if(root==null){
  return []
}
let que=[root]
let result=[]
while(que.length > 0){
  let node = que.shift()
 result.push(node.value)
 if(node.left){
  que.push(node.left)
 }
 if(node.right){
  que.push(node.right)
 }
}
return result
};

console.log(levelOrderTraversal(bt))
const isBalanced = (root) => {
  const checkHeight = (node) => {
    if (node == null) {
      return 0;
    }
    const leftHeight = checkHeight(node.left);
    const rightHeight = checkHeight(node.right);
    if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return checkHeight(root) !== -1;
};

const lowestCommonAncestor = (root, p, q) => {
  if (root == null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right != null) {
    return root;
  }
  return left != null ? left : right;
};

const treeToDoublyList = (root) => {
  if (!root) return null;

  let head = null, prev = null;

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);

    if (prev) {
      prev.right = node;
      node.left = prev;
    } else {
      head = node;
    }
    prev = node;

    inorder(node.right);
  };

  inorder(root);

  head.left = prev;
  prev.right = head;

  return head;
};
const hasPathSum = (root, sum) => {
  if (root == null) {
    return false;
  }
  if (root.left == null && root.right == null) {
    return root.value === sum;
  }
  return hasPathSum(root.left, sum - root.value) || hasPathSum(root.right, sum - root.value);
};

const invertTree = (root) => {
  if (root == null) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
const diameterOfBinaryTree = (root) => {
  let diameter = 0;

  const depth = (node) => {
    if (node == null) {
      return 0;
    }
    const left = depth(node.left);
    const right = depth(node.right);
    diameter = Math.max(diameter, left + right);
    return Math.max(left, right) + 1;
  };

  depth(root);
  return diameter;
};
