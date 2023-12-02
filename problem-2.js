// Problem-2 Even Fibonacci Numbers
// https://projecteuler.net/problem=2

function fib(num){
    if(num == 1) return [1]
    if(num == 2) return [1,2]
    let result = fib(num - 1)
    result.push(result[result.length - 1] + result[result.length - 2])
    //let total= [...result].reduce((acc, curr) => acc + curr, 0)
    return result
}
console.log(fib(100).reduce((acc, curr) => {
    if(curr > 4000000) return acc
    if(curr % 2 != 0) return acc
    if(curr % 2 == 0) return acc + curr 
}, 0))