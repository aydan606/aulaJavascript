const array = [25, 13, 500, 5, 25, 48, 758, 56898, 5, 1, 38, 1];

function valoresUnicos(array) {

    const mySet = new Set(array);
    return [...mySet];

}

console.log(valoresUnicos(array));