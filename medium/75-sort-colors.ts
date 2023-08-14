function sortColors(nums: number[]): void {
  let start = 0;
  let mid = 0;
  let end = nums.length - 1;

  while (mid <= end) {
    const val = nums[mid];
    switch (val) {
      case 0:
        [nums[start], nums[mid]] = [nums[mid], nums[start]];
        start++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[end]] = [nums[end], nums[mid]];
        end--;
        break;
    }
  }
}
