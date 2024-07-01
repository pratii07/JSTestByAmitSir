// Write a function to check if a given string is a palindrome.

function palindrome(st1,st2){
    let st3=''
    for(let i=st1.length-1;i>=0;i--){
         st3 = st3 +st1[i];
    }
    if(st3 == st2){
        return true;
    }
    else{
        return false;
    }
}

const str1 = 'bat'; 
const str2 = 'tab'; 
const ans = palindrome(str1,str2);
console.log(ans);