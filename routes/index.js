const express = require('express');
const mutantController = require('../controllers/mutantController');

const router = express.Router();

router.post('/mutant', (req, res) => {
    mutantController.verifyDna(req, res);
});

module.exports = router;