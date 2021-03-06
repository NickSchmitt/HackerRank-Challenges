# HackerRank Coding Challenges

[Create a HackerRank account](https://www.hackerrank.com/auth/signup?h_r=home&h_l=body_middle_left_button&h_v=1), then attempt to solve the following HackerRank challenges.

## [1. Staircase](https://www.hackerrank.com/challenges/staircase/problem)
## [2. Mini-Max Sum](https://www.hackerrank.com/challenges/mini-max-sum/problem)

## [3. Fibonacci Numbers](https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem)
### Fibonacci

**Recursive** functions are functions that call themselves. They can be a natural tool for solving repetitive problems, like Fibonacci.

Beyond fib(0) and fib(1), all we are doing is computing the value of fib(n) by adding together the two previous fib values, i.e. fib(n-1) and fib(n-2). So, fib(5) = fib(4)+fib(3).

the number of computations required grows exponentially, which is really bad. There is something called memoization is the process of storing previously computed values for us to use later for other computations.