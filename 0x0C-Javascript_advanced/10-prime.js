function countPrimeNumbers()
{
    let limit = 100;
    let result = 0;

    prime:
    for (let i = 2; i <= limit; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j == 0)
                continue prime;
        }
        result += 1;
    }
    return result;
}
let startTime = performance.now();
for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
}
let endTime = performance.now();
let finalTime = (endTime - startTime);

console.log('Execution time of calculating prime numbers 100 times was ' + finalTime + ' milliseconds.');
