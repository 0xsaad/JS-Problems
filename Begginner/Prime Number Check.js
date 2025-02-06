function prime(n) {
    if (n === 1) {
        console.log(`${n} is neither a prime nor a composite number`);
    } else if (n < 1) {
        console.log(`${n} is not a prime number`);
    } else {
        let isPrime = true;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${n} is a prime number`);
        } else {
            console.log(`${n} is not a prime number`);
        }
    }
}

// Example usage:
prime(1);  // Output: 1 is neither a prime nor a composite number
prime(2);  // Output: 2 is a prime number
prime(4);  // Output: 4 is not a prime number
prime(-5); // Output: -5 is not a prime number

