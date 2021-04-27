const mutantService = require('../services/mutantServices');

exports.verifyDna = function(req, res) {
    const dna = req.body;

    const isMutant = mutantService.verify(dna);
    if(isMutant) {
        res.sendStatus(200);
    }
    else {
        res.sendStatus(403);
    }
};