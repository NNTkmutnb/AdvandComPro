function longestUniqueSubarrayWithTargetSum(arr, targetSum) {
    // Your code here
    let maxLength = 0;
    let resultSubarray = [];

    // ลูปสำหรับการเริ่มต้นของ subarray
    for (let start = 0; start < arr.length; start++) {
        let currentSum = 0;
        let uniqueElements = new Set();
        let end = start;

        // ลูปสำหรับการขยาย subarray
        while (end < arr.length) {
            // ถ้ามีการซ้ำซ้อนให้หยุด
            if (uniqueElements.has(arr[end])) {
                break;
            }

            uniqueElements.add(arr[end]);
            currentSum += arr[end];

            // ตรวจสอบว่าค่ารวมเป็น targetSum หรือไม่
            if (currentSum === targetSum) {
                if (end - start + 1 > maxLength) {
                    maxLength = end - start + 1;
                    resultSubarray = arr.slice(start, end + 1);
                }
            }

            end++;
        }
    }

    return { maxLength, subarray: resultSubarray };
    
 }

 // Example usage:
console.log(longestUniqueSubarrayWithTargetSum([2, 3, 4, 5, 6, 2, 3, 4, 7], 15));
// Expected output: { maxLength: 3, subarray: [4, 5, 6] }
console.log(longestUniqueSubarrayWithTargetSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
// Expected output: { maxLength: 5, subarray: [1, 2, 3, 4, 5] }
console.log(longestUniqueSubarrayWithTargetSum([4, 5, 6, 7, 7, 8, 9, 10, 11], 26));
// Expected output: { maxLength: 0, subarray: [] }
console.log(longestUniqueSubarrayWithTargetSum([1, 1, 1, 1, 1], 2));
// Expected output: { maxLength: 0, subarray: [] }