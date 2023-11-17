function abc(A){
    console.log(A)
    let res=[]
    for (let i=0 ; i<A.length ; i++){
        // console.log(A[i])
        if(A[i]=="C"){
            console.log( A[i] , res[res.length-1])
            res.pop()
        }else if(A[i]=="D"){
         console.log('D' ,res, Number(res[res.length-1])*2)
         res.push(Number(res[res.length-1])*2)

        }else if(A[i]=="+"){
            let sum=0;
          sum=Number(res[res.length-1] + res[res.length -2])
            console.log("D" , sum)
            res.push(sum)
            console.log('+')
            
        }else{
            console.log(A[i] + "kk")
            res.push(Number(A[i]))
        }
    }
    console.log(res)
    let result=0
    for (let i=0; i<res.length ; i++){
      result=result + Number(res[i])
    }
    console.log(result)
}
let arr=['5' , '2' , 'C' , "D" ,9,'+' , "+"]
abc(arr)