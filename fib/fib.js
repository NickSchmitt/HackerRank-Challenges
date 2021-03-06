// First two numbers are 0 and 1
// Any subsequent number is the sum of the two previous numbers.
// For any number n, fib(n) = fib(n-1) + fib(n-2)

// fib(0) = 0
// fib(1) = 1
// fib(2) = 0 + 1 = 1
// fib(3) = 1 + 1 = 2
// fib(4) = 2 + 1 = 3

// fibonacci number: 	0, 1, 2, 3, 4, 5, 6
// result:				0, 1, 1, 2, 3, 5, 8

const fib = (n) => {
  if (n == 0) return 0
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

/* The if statement is the base case. 
All recursive functions need a base case.
The base case is the non-recursive part of a function that will 
eventually produces a value. Since fib(0), fib(1) and fib(2) 
are defined non-recursively, we can use those conditionals as our base cases. These base case conditionals will always be hit after fib(n) calls fib(n-1) enough times.

When n <= 2 is fulfilled, fib(n) will stop recursing and start returning values to fib(n-1)+fib(n-2), all the way back up to the outermost function's return.

The problem is, the number of function calls required to compute
fib(n) grows exponentially. Every single time we calculate 
fib(n-1) + fib(n-2), we need to rerun fib() with every number 
between 2 and n. To calculate just the 50th value of fibonacci, 
we'd need approximately 28140284357 calls of fib!
A lot of those are repetitive calls, which are called "overlapping subproblems". 

The good news is that when a recursive function has overlapping subproblems, we can optimize away those reptitive calls with 
a technique called "memoization".
Instead of producing the same values over, we can instead compute each
value only once, then store those values, then easily retrieve them
the next time we would have needed to compute them. */

// *** Memoized recursive function *** 


const fib = (n, memo = {}) => {
  
  if (n in memo) return memo[n]
  if (n <= 2) return 1

  
  memo[n] = fib(n - 1) + fib(n - 2)

  // Finally, with fib(n-1) + fib(n-2) calculated and stored in the memo like the rest of its subproblems,
  // we can return its value by retrieving it from the memo.
  return memo[n]
}

// In Javascript, we have the object data type, that allows us to store a value and retrieve it later based on its key.

// If we have already computed fib(n), we won't need to go through this whole function,
  // and can instead return the value stored that was stored from the first and only computation of fib(n).

  /* We run through the recursive computation once, fib(n-1) + fib(n-2), 
	and as we recurse all the way down to fib(2), we store the result of fib(n) in our memo object. 
	The key for that value will be n. This means that next time that one of the subproblems need to be computed again, 
	it'll be immediately returned thanks to our if(n in memo).*/