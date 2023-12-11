// function abc(s, n){
// if((Number(s) > 9) && (n > 0)){
//     // console.log(n)
//     let sum =0;
// for (let i=0;i<s.length ; i++){
// sum=sum+Number(s[i])
// }
// console.log(sum , --n)
// //  n--
//  let res=String(sum)
//  abc(res , n--)
// }else{
//      console.log(s)
//     // return Number(s)

// }
// }
// abc('87887'  , 200)
// function abc(haystack, needle){
// for(let i=0; i<haystack.length ; i++){
//     // console.log(needle , haystack.slice(i,3+i) , i)
//     if(needle==haystack.slice(i, 3+i)){
//         return i
//     }
// }
// }
// haystack = "sdbsadutsad", needle = "sad"
// abc(haystack , needle)
// function abc(){
// let res=s.split(' ')
// console.log(res)
// for (let i=res.length -1 ; i>0; i--){
//  let result = res[i] + ""
// if(result.length){
//     console.log(result)
//     return result
// }
  
// }
// }
// let s="a"
// abc(s)
// function abc(s){
// let res=s.split(" ")
// let result=''

// for (let i=0 ; i< res.length ; i++){
//  let ans=reverce(res[i])
//  console.log(ans)
//  result = result + ans + ' '
 
// }
// console.log(result)
// return result.trim()
// }
// let s="Let's take LeetCode contest"
// abc(s)
// function reverce(s){
//     let res=''
//     for (let i=s.length -1 ; i >= 0 ; i--){
//         res = res + s[i]
//         // console.log(s[i])
//     }
//     // console.log(res)
//     return res
// }
// // reverce('ram')

function abc(s,k){
    let result=''
    for(let i=0; i<s.length ; i=i+k){
       let ans= reverce(s.slice(i,k+i) , k)
       console.log(ans)
       result=result + ans

    }
    console.log(result)
    return result
}
s = "abcdef", k = 2
// abc(s,2)

function reverce(s,k){
    let res=''
for (let i=0 ; i<s.length ; i++){
    // console.log(s[i])
  res=  s[i] + res 
}
// console.log(res)
return res
}
// reverce(s,k)
function fib(n){
 if(n==0 || n==1){
    return n
 }else{
  return fib(n-1) + fib(n-2)
 }

}
// console.log(fib(5))
// 0 1 

function saydigit(n){

//   console.log(n)
if(n <= 0 ){
    // console.log(n)
    return 
}else{
    n=String(n)
    console.log(n[0])
    n1=Number(n.slice(1,n.length))
   console.log(n1 )
     saydigit(n1)

}

}

// saydigit(4251378 )

function issorted(A){
    if(A.length==0 ) {
        return true
    }else if(A.length==1)
    {
        return true
    }
    else{
    
       if(A[0]>A[1]){
     return false
       }else{
        let arr=A.slice(1,A.length)
        console.log(arr)
       return issorted(arr)
       }

    }
// return false
}
let B=[1,2,2,3,4,3]
// console.log("res" , issorted(B))

function getsome(A , sum=0){
      if(A.length < 1){
        console.log("return")
        return sum
      }else{
        let B=A.slice(1,A.length)
        console.log(B , A[0])
        sum=sum + A[0]
        console.log(sum)
        return  getsome(B , sum)
      }

}
console.log(getsome(B))

