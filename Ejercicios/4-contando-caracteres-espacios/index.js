// usar 'do wile' para delimitar la cantidad de palabras que pueden usar.
// No usar length :(
    let sentence = prompt('Ingresa aquí la frase que quieras')

    let letter = '';
    let counter = 0;
    let spaceCounter = 0;

    // Una función que imprime todos los caracteres de un string, cada uno en una línea separada, en mayúscula.
    const printStringCharacters = (str) => {
        for(let i = 0; i < str.length; i++){
            letter += str[i].toUpperCase() + '\n';
        }
        return letter
    };

    // Una función que cuente el número de caracteres de un string (¡sin utilizar .length!)
    const characterCounter = (strFunc) =>{
        for(let i = 0 ;i <= sentence; i++){
            counter++;
        }
            return counter;
    }

    console.log(printStringCharacters(sentence));
    console.log(characterCounter(printStringCharacters(sentence)));

    // let spaceCounter = 0;
    // let counter = 0;
    // let letter = '';
    // for(let i = 0; i < sentence.length; i++){
    //     //    Muestra en consola los caracteres uno a uno, separados por un salto de linea.
    //     letter += sentence[i].toUpperCase() + '\n';
    //    if(sentence[i] === ' '){
    //     //    Cuenta espacios.
    //         spaceCounter++;
    //    } else if (sentence[i] !== ' '){
    //     //    cuenta caracteres que no son espacios.
    //         counter++;
    //    }
    // }
    
    // console.log(letter);
    // console.log(counter);
    // console.log(spaceCounter);
    // Una función que cuente el número de espacios de un string