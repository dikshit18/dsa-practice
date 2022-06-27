function longestCommonPrefix(arr,n){
    const word = arr[0];
    let answer ='';
    for (let k = 0; k < word.length; k++) {
        let i =1,flag=false;
        while(i<n){
            if(arr[i][k] === word[k]){
                i++
                
            } else{
                flag = true;
                break;
            };
        }
        if(!flag)
        answer+=word[k];
    }
    return answer || -1;
}
console.log(longestCommonPrefix(['Hey','Hello'],2))