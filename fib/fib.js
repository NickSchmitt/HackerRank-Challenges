// First two numbers are 0 and 1
// Any subsequent number is the sum of the two previous numbers.
// For any number n, fib(n) = fib(n-1) + fib(n-2)

// fib(0) = 0
// fib(1) = 1
// fib(2) = 0 + 1 = 1
// fib(3) = 1 + 1 = 2
// fib(4) = 2 + 1 = 3

// fibonacci number:	0, 1, 2, 3, 4, 5, 6
// result:		0, 1, 1, 2, 3, 5, 8

const fib = (n) => {
  if (n == 0) return 0
  if (n <= 2) return 1

  return fib(n - 1) + fib(n - 2)
}

/*
The base case is the non-recursive part of a function that will 
eventually produces a value. All recursive functions need a base case, or they'll just recurse forever and never return a value.
Since fib(0), fib(1) and fib(2) are defined non-recursively, we can use those conditionals as our base cases. 
These base case conditionals will always be hit once fib(n) calls fib(n-1) enough times.

When n <= 2 is fulfilled, fib(n) will stop recursing and start returning values to fib(n-1)+fib(n-2), 
all the way back up to the outermost function's return.

The problem with this solution is that the number of calls required to compute
fib(n) grows exponentially with the size of n. Every single time we calculate 
fib(n-1) + fib(n-2), we need to rerun fib() with every number 
between 2 (our base case) and n. To calculate just the 50th value of fibonacci, 
we'd need over 28 billion function calls!

The good news is that a lot of those are repetitive calls, which are called "overlapping subproblems". 
When a recursive function has overlapping subproblems, we can optimize away those reptitive calls with 
a technique called "memoization". 

Instead of producing the same values over, we can instead compute each value only once, 
then store those values somehwere, then easily retrieve them the next time we would have needed to compute them. */

// *** Memoized recursive function ***

const fib = (n, memo = {}) => { // 1
  if (n in memo) return memo[n] // 2
  if (n <= 2) return 1

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo) // 3
  return memo[n]
}

// 1. We can use an object, which we call memo, store a value and retrieve it later based on its key.

/* 2. If we have already computed fib(n), we won't need to go through with recursively calling fib(n-1)+fib(n-2),
and can instead return the value, based on the key n, that was stored in memo from the first and only computation of fib(n). */

/* 3. We run through the recursive computation once, fib(n-1) + fib(n-2), 
and as we recurse all the way down to fib(2), along the way we store each result of fib(n) in our memo object at memo[n]. 
This means that next time that particular subproblem needs to be computed again, which it will many many times, 
it'll be immediately returned thanks to if(n in memo) return memo[n].*/
