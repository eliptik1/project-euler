//Problem-3 Largest Prime Factor
// https://projecteuler.net/problem=3

function prime(num, div=2){
    if (num <= 1) return [1]
    if (num % div == 0) {
        let result = prime(num / div, div)
        result.push(div)
        return result 
    } else {
        div++
        return prime(num, div)
    }
}
console.log(prime(1234).sort((a,b)=> b-a)[0])