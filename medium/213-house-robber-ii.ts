// function rob2(nums: number[]): number {
//   if (nums.length === 1) return nums[0];

//   const dp1 = [nums[0]]; // Always steals from first house, never last
//   for (let i = 1; i < nums.length - 1; i++) {
//     const money = nums[i];
//     dp1[i] = Math.max(dp1[i - 1], i - 2 >= 0 ? dp1[i - 2] + money : money);
//   }

//   const dp2 = [0, nums[1]]; // Always steals from second house, possibly last
//   for (let i = 2; i < nums.length; i++) {
//     const money = nums[i];
//     dp2[i] = Math.max(dp2[i - 1], i - 2 >= 1 ? dp2[i - 2] + money : money);
//   }

//   return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
// }

// Alternative using helper based on rob() and O(1) space
function helper(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  let rob1 = 0;
  let rob2 = 0;

  for (const num of nums) {
    const money = Math.max(rob1 + num, rob2);
    rob1 = rob2;
    rob2 = money;
  }

  return rob2;
}

function rob2(nums: number[]): number {
  if (nums.length === 1) return nums[0];

  return Math.max(
    helper(nums.slice(0, nums.length - 1)),
    helper(nums.slice(1))
  );
}
