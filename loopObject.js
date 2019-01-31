const object = {name: "Luke Skywalker", occupation: "Jedi", powers: "The force"};


const loopObject = (object) => {
    const checkifObject = typeof object === 'object';
    if (checkifObject) {
        const convObj = Object.entries(object);
        for (const [key, property] of convObj){
            console.log(`${key} with property ${property}`);
        }
    }
};


loopObject(object);