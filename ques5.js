// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is 
// equal to the product of all the elements of nums except nums[i].

function ProductElements(arr){
    let k=0;
    let lis=[]
    for(let i=0;i<arr.length;i++){
        let p=1;
        for(let j=0;j<arr.length;j++){
            if(j!=k){
                p=p*arr[j];
            }
        }
        lis.push(p)
        k=k+1;
    }
    return lis; 
}

const arr = [1,2,3,4];
const ans = ProductElements(arr)
console.log(ans)
