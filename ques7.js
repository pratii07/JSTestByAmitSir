// Find the kth largest element in an unsorted array.

function kthLargest(arr,k){
    let l= arr.length
    const arr1 = arr.sort()
    // console.log(arr1)
    return arr1[l-k];

}
const arr = [2,3,5,8,5];
const k = 2;
const ans = kthLargest(arr,k)
console.log(ans)