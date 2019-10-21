// usar 'do wile' para delimitar la cantidad de palabras que pueden usar.
// No usar length :(
let sentence = prompt('Ingresa aquí la frase que quieras')

let letter = '';
let counter = 1;
let spaceCounter = 0;

// 1- Una función que imprime todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
const printStringCharacters = (sentence) => {
    for (let i = 0; i < sentence.length; i++) {
        letter += sentence[i].toUpperCase() + '\n';
    }
    return letter
};

// Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
const characterCounter = (sentence) => {
    let last = sentence.substr(-1);
    //cuenta los carácteres pero sólo hasta que se topa con uno coincida con la ultima letra
    // let first = sentence.substr(0,1);
    // let total = sentence.lastIndexOf
    return counter += sentence.indexOf(last, 0);
}

// Una función que cuente el número de espacios de un string
const counterSpaces = (sentence) => {
    for (let i = 0; i < sentence.length; i++){
        if(sentence[i] === ' '){
            spaceCounter++;
        }
    }
    return spaceCounter;
}

console.log(printStringCharacters(sentence));
console.log('leter number', characterCounter(sentence));
console.log('spaces in the text', counterSpaces(sentence));