// First two numbers are 0 and 1
// Any subsequent number is the sum of the two previous numbers.
// For any number n, fib(n) = fib(n-1) + fib(n-2)

// fib(0) = 0 + 1 = 1
// fib(1) = 0 + 1 = 1
// fib(2) = 0 + 1 = 1
// fib(3) = 1 + 1 = 2
// fib(4) = 2 + 1 = 3

// fibonacci number: 	0, 1, 2, 3, 4, 5, 6
// result:				0, 1, 1, 2, 3, 5, 8

const fib = (n) => {
  // Base case. All recursive functions need a base case.
  // The base case is a conditional that, when met, produces a value.
  // Since fib(0), fib(1) and fib(2) all produce 1 in fibonacci, we can use the following base case:
  if (n <= 2) return 1

  // Now, when we call fib(n-1) + fib(n-2) below,
  // it will call itself with decreasing values of n until n<=2,
  // at which point, instead of continuing to call itself, it'll return 1.
  return fib(n - 1) + fib(n - 2)
}

/* The problem is, the number of calls required to compute this grows exponentially. 
A lot of those are repetitive calls, which are called "overlapping subproblems". 
Every single time we have to calculate fib(n-1) + fib(n-2), we need to rerun fib() with every parameter between 2 and n. 
To calculate just the 50th value of fibonacci, we'd need approximately 28140284357 calls of fib!

The good news is that when a recursive function has overlapping subproblems, we can use a technique called "memoization". 
Instead of recomputing the same function calls over and over, we can instead compute them just once, store those values, 
then easily retrieve them the next time we would have needed to compute them. */

// In Javascript, we have the object data type, that allows us to store a value and retrieve it later based on its key.
const fib = (n, memo = {}) => {
  // If we have already computed fib(n), we won't need to go through this whole function,
  // and can instead return the value stored that was stored from the first and only computation of fib(n).
  if (n in memo) return memo[n]

  // The same base case as before
  if (n <= 2) return 1

  /* We run through the recursive computation once, fib(n-1) + fib(n-2), 
	and as we recurse all the way down to fib(2), we store the result of fib(n) in our memo object. 
	The key for that value will be n. This means that next time that one of the subproblems need to be computed again, 
	it'll be immediately returned thanks to our if(n in memo).*/
  memo[n] = fib(n - 1) + fib(n - 2)

  // Finally, with fib(n-1) + fib(n-2) calculated and stored in the memo like the rest of its subproblems,
  // we can return its value by retrieving it from the memo.
  return memo[n]
}
