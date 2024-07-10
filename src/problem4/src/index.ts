/**
  * This implementation uses a simple loop to calculate the sum. It has a linear time complexity
  * Time Complexity: O(n) - The function iterates from 1 to n, performing a constant-time addition operation in each iteration.
  * Space Complexity: O(1) - The function uses a fixed amount of additional space for the sum variable.
  *
  * @param n - number
*/
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log("sum_to_n_a", sum_to_n_a(10)); // output: 55

/**
  * This implementation uses the mathematical formula for the sum of the first n natural numbers. It has constant time complexity
  * Time Complexity: O(1) - The function performs a fixed number of arithmetic operations regardless of the input size
  * Space Complexity: O(1) - The function uses a fixed amount of additional space for the calculation
  *
  * @param n - number
*/
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}
console.log("sum_to_n_b", sum_to_n_b(10)); // output: 55

/**
  * This implementation uses recursion to calculate the sum. It has a linear time complexity but also involves a higher space complexity due to the call stack
  * Time Complexity: O(n) - The function calls itself n times, performing a constant-time addition operation in each call
  * Space Complexity: O(n) - The function uses additional space proportional to the depth of the recursion stack
  *
  * @param n - number
*/
function sum_to_n_c(n: number): number {
  if (n <= 1) {
    return n;
  }
  return n + sum_to_n_c(n - 1);
}
console.log("sum_to_n_c", sum_to_n_c(10)); // output: 55
