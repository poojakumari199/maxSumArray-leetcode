var maxSubArray = function(nums) {
    let totalsum = nums[0];
        
        for(let i=1; i<nums.length; i++){
            nums[i] = Math.max(nums[i], nums[i]+nums[i-1]);
            totalsum = Math.max(totalsum, nums[i]);
          console.log(totalsum);
        }
        return totalsum;
    };