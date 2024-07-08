function abc(s){
    let ans=""
    for(let i=0; i<s.length ; i++){
        if(!ans.includes(s[i])){
            ans=ans+s[i]
        }
    }
    console.log(ans)
    }
    abc("abajjjjjjjjjjjjjjbbbbbbbbbbbbbaaaaaaaaaaab")