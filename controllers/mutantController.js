const mutantService = require('../services/mutantServices');
const mutantValidator = require('../validators/mutantValidator');

exports.verifyDna = function(req, res) {
    if(req && req.body && req.body.dna && mutantValidator.validateDna(req.body.dna)){
        const dna = req.body.dna;

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
