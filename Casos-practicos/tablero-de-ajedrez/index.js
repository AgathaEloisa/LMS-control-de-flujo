let size = parseInt(prompt('tamaño de cuadricula'));
let str = prompt('ingresa un caracter');

const chessboard = (str, size) => {
    // let board = str + ' ';
    // let repeat = board.repeat(size);
    // let final;
    let result = '';

    for(let i = 1 ;i <= size; i++){
        for(let n = 1; n <= size; n++){
            if((n + i) % 2 === 0){
                result += ' ';
            } else {
                result += str;
            }
        }
        result += '\n';
    }
   return result;
}

console.log(chessboard(str, size));