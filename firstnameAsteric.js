const printFirstNameWithAsteric = (name) => {
    const nameType = typeof name === 'string';
    if(nameType){
        for (let i = 0; i <= name.length; i++){
            console.log('***');
        }
    } 

};




printNameWithAsteric('Ayooluwa');