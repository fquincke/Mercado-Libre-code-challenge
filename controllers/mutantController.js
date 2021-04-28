const mutantService = require('../services/mutantServices');

exports.verifyDna = function(req, res) {
    const dna = req?.body?.dna;
    if(validateDna(dna)){

        const isMutant = mutantService.verify(dna);
        if(isMutant) {
            res.sendStatus(200);
        }
        else {
            res.sendStatus(403);
        }
    }
    else {
        res.sendStatus(400);
    }
};

const validateDna = function (dna) {
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