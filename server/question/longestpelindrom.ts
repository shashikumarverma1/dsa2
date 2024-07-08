/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s) {
        return "";
    }
function helper(s, l ,r){
    while(l>=0 && r<s.length && s[l]==s[r]){
        r++
        l--
    }
    return r-l-1
}

let start=0
let end=0
for(let i=0; i< s.length ; i++){
    let odd=helper(s,i,i)
    let even=helper(s,i,i+1)
    let max=Math.max(odd , even)

    if(max > end-start){
        start=i - Math.floor((max-1)/2)
        end=i + Math.floor(max/2)
    }

}
   return s.substring(start , end + 1)
};