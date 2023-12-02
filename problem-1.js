// Problem-1 Multiples of 3 or 5
// https://projecteuler.net/problem=1

function sum(num) {
    if (num === 0) return [];
    if (num % 5 === 0 || num % 3 === 0) {
        let result = sum(num-1)
        result.push(num);
        return result
    }
    return sum(num - 1);
}
console.log(sum(1000).reduce((acc,curr)=>acc+curr,0) - 1000);