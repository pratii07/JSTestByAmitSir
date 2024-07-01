// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

function StringValid(str){

    let l= str.length-1
    if((l+1)%2!=0){
        return false;
    }
    
    let i=0;
    while(i<=l/2){
        if(str[i] =='('){
            if(str[l] !=')'){
                return false;
            }
        }
        if(str[i] =='{'){
            if(str[l] !='}'){
                return false;
            }
        }
        if(str[i] =='['){
            if(str[l] !=']'){
                return false;
            }
        }
        i=i+1;
        l=l-1;
    }
    return true;
}
const str = '({]})';  //{{[]}}
const ans = StringValid(str);
console.log(ans);