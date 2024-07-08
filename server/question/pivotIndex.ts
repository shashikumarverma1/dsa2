function abc(arr){
    let totalsum=arr.reduce((a,b)=>a+b)
    let leftsum=0
    
    for(let i=0; i< arr.length; i++){
        let rigthsum=totalsum - leftsum - arr[i]
        if(leftsum==rigthsum){
            return i
        }
        leftsum +=arr[i]
    }
    }
    let ans=abc([1,2,3,2,1])
    console.log(ans)