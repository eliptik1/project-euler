//Problem-5 Smallest Multiple
// https://projecteuler.net/problem=5

function lcm(arr, divider = 2, lcmArr = []){ // Least Common Multiple (LCM)
    if(arr.filter(num => num != 1).length == 0){ 
        return lcmArr.reduce((acc, curr) => acc*curr, 1)
    } 
    let newArr = arr.map(num => {
        if(num % divider === 0) { 
            return num / divider 
        } else {
            return num
        }
    });
    if(arr.filter(num => num != 1).filter(num => num % divider == 0).length == 0){ 
        return lcm(newArr, divider+1, lcmArr)
    } else {
        lcmArr.push(divider)
        return lcm(newArr, divider, lcmArr)
    }
}

function smallestMultiple(start, finish){ 
    let arr = []
    for (let i = start; i <= finish; i++) arr.push(i)
    return lcm(arr)
}

console.log(smallestMultiple(1,10));