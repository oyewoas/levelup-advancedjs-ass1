const sumfromNumToOne = (number) => {
    if(number === 0){
        return 0;
    }
    if (number === 1){
        return 1;
    }
    else if ( number > 1 ) {
        const sumedNumber = number + sumfromNumToOne(number - 1);
        return sumedNumber;
    }
};

console.log(sumfromNumToOne(5));