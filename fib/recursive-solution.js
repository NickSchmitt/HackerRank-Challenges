// const fib = (n) => {
// 	if (n <= 2) return 1
// 	return fib(n-1) + fib(n-2)
// }

// memoization 

const fib = (n, hash={}) => {
	if (n in hash) return hash[n]
	if (n<= 2) return 1
	hash[n] = fib(n-1, hash) + fib(n-2, hash)
	return hash[n]
}

let num1 = 5
let num2 = 50
let label1 = `fib${num1}`
let label2 = `fib${num2}`

console.time(num1.toString())
fib(num1)
console.timeEnd(num1.toString())

console.time(num2.toString())
fib(num2)
console.timeEnd(num2.toString())

