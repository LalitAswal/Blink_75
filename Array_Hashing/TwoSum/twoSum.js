// var twoSum = function(nums, target) {
//     let first = 0
//     while(first< nums.length){
//     let check;
//     if(nums[first] >target){
//      check =nums[first] -target
//     }else{
//      check = target - nums[first]
//     }
        
//         for(let i =first+1; i<nums.length; i++){
//             if(check === nums[i]) return [first, i]
            
//         }
//         first+=1
//         // console.log([first,check])
//     }
//  };

// //  let nums = [3,3], target = 6;
//  let nums = [-1, -2, -3, -4, -5] , target = -8;
// //  let nums = [11,6,6,4,3,5,7,15], target = 9

// console.log( twoSum(nums,target))



var twoSum = function(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            console.log('[map.get(complement), i]',[map.get(complement), i])
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
        console.log(map)
    }
    return [];


}


//  let nums = [3,3], target = 6;
 let nums = [-1, -2, -3, -4, -5] , target = -8;
//  let nums = [11,6,6,4,3,5,7,15], target = 9

console.log( twoSum(nums,target))
