// 1) Write a function to generate the first n numbers in the Fibonacci sequence.
// 0, 1, 1, 2, 3, 5, 8,
function Fibonacci(n){
    let a=0;
    let b=1;
    let lis=[0]
    if(n==0 || n==1){
        return [0];
    }
    lis.push(1)
    for(let i=2;i<n;i++){
        let c= a+b;
        a=b;
        b=c;
        lis.push(b)
    }
    return lis;
}

const n=1;
const ans = Fibonacci(n);
console.log(ans)

