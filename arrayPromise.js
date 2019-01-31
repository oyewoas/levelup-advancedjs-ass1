const favFruitandFood = [
    'Rice',
    'Beans',
    'Plantain',
    'Boiled Egg',
    'Amala',
    'Pineapple',
    'Pounded Yam',
    'Egusi Stew',
    'Fried Pork',
    'Fried Chicken',
    'Fried Turkey',
    'Orange',
    'Banana',
    'Yam and Fried Egg'
];

// const checkFruitandFood = (fruitorfoodArray, fruitorfood) => {
//     const  checkString = typeof fruitorfood === 'string';
//     const checkArray = Array.isArray(fruitorfoodArray);
//     if (checkString && checkArray){
//         const inArray = fruitorfoodArray.includes(fruitorfood);
//         if (inArray) {
//             console.log(`${fruitorfood} is in my lsit of favourite foods and fruits`);
//         } else {
//             console.log(`${fruitorfood} is not in my lsit of favourite foods and fruits`);

//         }

//     }
// };

const checkFruitandFoodArray = (fruitorfoodArray) => {
    return new Promise ((resolve, reject) => {
        const checkArray = Array.isArray(fruitorfoodArray);
        if (checkArray) {
            resolve(fruitorfoodArray);
            
        }
    });
};
// console.log(checkFruitandFoodArray(favFruitandFood));

const checkFruitorFoodString = (fruitorfood) => {
    const  checkString = typeof fruitorfood === 'string';
    return new Promise((resolve, reject) => {
        if (checkString) {
            resolve(fruitorfood);
            
        }
    });
};
// console.log(checkFruitorFoodString('Rice'));


const checkFruitandFood = async (fruitorfoodArray, fruitorfood) => {
    try {
        const checkArray = await checkFruitandFoodArray(fruitorfoodArray);
        const checkString = await checkFruitorFoodString(fruitorfood);

        if (checkString && checkArray) {
            const inArray = fruitorfoodArray.includes(fruitorfood);
            if (inArray) {
                console.log (`${fruitorfood} is in my lsit of favourite foods and fruits`);
            } else {
                console.log (`${fruitorfood} is not in my lsit of favourite foods and fruits`);
    
            }
        };

    } catch(error){
        console.error(error, 'There is an error');
        
    };
};
checkFruitandFood(favFruitandFood, 'Orange');