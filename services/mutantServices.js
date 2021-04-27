exports.verify = function(dna) {

    for (let row = 0; row < dna.length; row++) { //iterates through the array of strings
        for (let col = 0; col < dna[0].length; col++) { //iterates through each letter of the string
            if(checkNitrogenBase(dna, row, col)) {
                return true;
            }
        }
    }

    return false;
};

checkNitrogenBase = function(dna, row, col) {
    const letter = dna[row][col];

    const canGoDown = row+3 < dna.length;
    const canGoRight = col+3 < dna[0].length;
    const canGoDiagonalRight = row+3 < dna.length && col+3 < dna[row].length;
    const canGoDiagonalLeft = row+3 < dna.length && col-3 < dna[row].length;

    if(canGoRight && letter === dna[row][col+1] && letter === dna[row][col+2] && letter === dna[row][col+3]) {
        return true;
    }
    if(canGoDown && letter === dna[row+1][col] && letter === dna[row+2][col] && letter === dna[row+3][col]) {
        return true;
    }
    if(canGoDiagonalRight && letter === dna[row+1][col+1] && letter === dna[row+2][col+2] && letter === dna[row+3][col+3]) {
        return true;
    }
    if(canGoDiagonalLeft && letter === dna[row+1][col-1] && letter === dna[row+2][col-2] && letter === dna[row+3][col-3]) {
        return true;
    }
    return false;
};