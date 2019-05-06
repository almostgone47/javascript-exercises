let arr = [1,2,3,4]
const removeFromArray = (arr, ...nums) => {
  for (let i = 0; i < nums.length; i++) {
    if(arr.includes(nums[i])){
      const index = arr.indexOf(nums[i]);
      arr.splice(index, 1);
    }
  }
  return arr;
}

module.exports = removeFromArray
