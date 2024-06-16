class TreeNode{
    constructor (value){
      this.value=value
      this.left=null
      this.right=null
    }
  }
  let arr=[0,1,2,3,4,5,,6,7,8,9]
  function arraytoBinarytree(arr){
    if(arr.length ===0){
      return null
    }
    let mid = Math.floor(arr.length / 2)
    const root = new TreeNode(arr[mid])
    root.left=arraytoBinarytree(arr.slice(0,mid-1))
    root.right=arraytoBinarytree(arr.slice(mid +1))
    return root
  } 
  
  let res=arraytoBinarytree(arr)
  console.log(res)
  const binarytoarray=(root)=>{
  let result =[]
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
  
  let res1=binarytoarray(res)
  console.log(res1)