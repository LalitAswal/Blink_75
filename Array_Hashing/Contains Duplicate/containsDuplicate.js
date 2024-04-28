// Return True if duplicate and false if all unique

// Solution 1
// const findDuplicate =(arr)=>{
//     let newArray =[];
    

// }

// // console.log('[1,2,3,1]', findDuplicate([1,2,3,1]))
// console.log('findDuplicate([1,2,3,4])', findDuplicate([1,2,3,4]))
// // console.log('[1,2,3,4,4,5,6,343,3,3]', findDuplicate([1,2,3,4,4,5,6,343,3,3]))

// solution 2

// const dublicate =(input)=>{
//     let checkArray = []; // use set as it is o[1]
//     for(let i =0;i<input.length; i++){
//         if(checkArray.includes(input[i])){
//             return true
//         }else{
//             checkArray.push(input[i])
//         }
//     }
//     return false
// }

// console.log('dublicate',dublicate([1,2,3,4,5,5]))
// console.log('dublicate',dublicate([1,2,3,4,4,5,6,343,3,3]))

// return index of dublicate value 

// first using set as it provide 0 1 even map do same 

const dublicate =(arr) =>{
    let seen = new Set()
    let repeatValue = new Set()
    for (let i = 0; i< arr.length; i++) {
      const element = arr[i];
      if(seen.has(element)){
        repeatValue.add(element)
      }else{
        seen.add(element)
      }
    }
    return repeatValue.size ? repeatValue: false
    
} 

console.log('dublicate',dublicate([1,2,3,4,5,5]))
console.log('dublicate',dublicate([1,2,3,4,4,5,6,343,3,3]))
console.log('dublicate',dublicate([1,2,3,4]))