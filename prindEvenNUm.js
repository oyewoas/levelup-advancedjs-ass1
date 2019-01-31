const printEvenNum = (min, max) => {
    let i;
    for (i = min; i <= max; i++){
        const checkEven = i % 2 == 0;
        if (checkEven) {
            console.log(`${i} is an even number between ${min} and ${max}`);
        } 
    }
};

printEvenNum(1, 10);