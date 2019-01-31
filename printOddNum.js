

const printOddNum = (min, max) => {
    let i;
    for (i = min; i <= max; i++){
        const checkEven = i % 2 == 0;
        if (!checkEven) {
            console.log(`${i} is an odd number between ${min} and ${max}`);
        } 
    }
};

printOddNum(1, 10);