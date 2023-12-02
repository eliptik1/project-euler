//Problem-4 Largest Palindrome Product
// https://projecteuler.net/problem=4

function palindrome(num){
    let arr = (typeof num == "number") ? Array.from(String(num), Number) : num
    if(arr.length <= 1)return true
    if(arr[0]==arr[arr.length-1]) { 
        let newArr = [...arr.slice(1,-1)]
        return palindrome(newArr)
    } else {
        return false
    }
}
function findLargest(){
    let largest = 0
    for (let a = 1; a <= 999; a++) {
        for (let b = 1; b <= 999; b++) {
            if(palindrome(a*b) == true){
                if(largest < a*b) {
                largest = a*b
                }
            }
        }
    }
    return largest  
}
console.log(findLargest())