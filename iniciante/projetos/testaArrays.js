function substituiPares(array) {

    if(!array)
        return -1;
        
        else if (!array.length)
            return -1;

    for(let i = 0; i < array.length; i++) {

        if(array[i] === 0)
            console.log("Já é zero.");

            else if (array[i] % 2 === 0) {
                array[i] = 0;
                console.log(`Substituindo ${array[i]} por 0...`);
            }

    }

    return array;

}

let array1 = [1, 5, 8, 10, 15, 23, 38, 50, 80, 91, 99, 100];
substituiPares(array1);