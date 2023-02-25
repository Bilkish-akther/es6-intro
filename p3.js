
const averageNumber = (numbers)=>{
    let totalSumOfNumber = 0;
    for(let i = 0; i < Number.length; i++){
        const number = numbers[i];
        const sqrNumber = number * number;
        totalSumOfNumber = totalSumOfNumber + sqrNumber;
    
    }
    return totalSumOfNumber / numbers.length;
    
};
const numbers = [1, 2, 3, 4];
const finalResult = averageNumber(numbers);
console.log(finalResult);



