
function twoSum (nums, target) {
    const numsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const rem = target - nums[i];
        if (numsMap.has(rem)) {
            return [numsMap.get(rem), i];
        } else {
            numsMap.set(nums[i], i);
        }
    }
    return [-1,-1];
}

