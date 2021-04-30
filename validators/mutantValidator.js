exports.validateDna = function (dna) {
    if(!dna[0]){
        return false;
    }

    const strLength = dna[0].length; 
    
    for (let text of dna) {
        if(!text || strLength != text.length) { //checks if every string is not null or has the same length
            return false;
        }

        for (let nitrogenBase of text) { 
            // const nitrogenBase = dna[i][j];
            switch (nitrogenBase){ //checks that the character is a valid nitrogen base
                case "A":
                case "T":
                case "C":
                case "G":
                    break;
                default:
                    return false;
            }
        }
    }
    return true;
}