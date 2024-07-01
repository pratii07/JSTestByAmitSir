// Given a string, find the length of the longest substring without repeating characters.

function LongestSubstring(str){
    let st='';
    for(let i=0;i<str.length;i++){
        if(st.includes(str[i])){
            let l=st.length;
            return l;
        }
        else{
            st=st+str[i];
        }
    }
}

const str = 'abca'; //abba
const ans = LongestSubstring(str);
console.log(ans);