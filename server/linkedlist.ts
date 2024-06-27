class Node{
    constructor(value){
      this.head=value
      this.next=null
    }
  }
  
  class singleList{
    constructor(){
      this.head=null
    }
  
    AddBeg(value){
      let newnode=new Node(value);
      newnode.next=this.head;
      this.head=newnode; 
    }
    AddEnd(value){
      let newNode=new Node(value)
      let current=this.head
      while(current?.next !==null){
        current=current?.next
      }
      current.next=newNode
    }
    AddPosition(value , position){
      let newNode=new Node(value)
      if(position==0){
        this.AddBeg(value)
      }
    let current=this.head
    let pre=null
    let ctr=0
    while(current.next != null && ctr < position){
      pre=current
      current=current.next
      ctr++
    }
    if(pre != null){
      pre.next=newNode
    
    }
    newNode.next=current
    }
    print(){
      let current=this.head
      while(current !=null ){
        console.log(current.head)
        current=current.next
      }
    }
  }
  let list=new singleList()
  list.AddBeg(6)
  list.AddEnd(4)
  list.AddEnd(55)
  list.AddPosition(3,0)
  
  list.AddEnd(90)
  list.AddPosition(22,0)
  list.print()
  // console.log()