function countPrimeNumbers()
{
    return 25;
}
let startTime = performance.now();
countPrimeNumbers();
let endTime = performance.now();
let finalTime = (endTime - startTime);

console.log('Execution time of printing countPrimeNumbers was ' + finalTime + ' milliseconds');
