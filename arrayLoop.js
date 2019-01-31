const arrayLoop = (parameter) => {
    const checkifArray = Array.isArray(parameter);
    if (checkifArray){
        parameter.forEach((element, index) => {
            // console.log (`${element} at ${index} index of the array`);
            console.log (`${element}`);
          });
    } else {
      console.log('function parameter must be an array') ;
    }
};

numarray = [1,2,3,4,5];
arrayLoop(numarray);