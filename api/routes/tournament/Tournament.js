const express = require('express');
const router = express.Router();
const TournamentQueries = require('./TournamentQueries');

router.get("/:year", (req,res,next) => {
    const year = req.params.year;
    TournamentQueries.getTournamentsByYear(year)
    .then(tournaments => {
        res.status(200).json(tournaments)
    })
 });

 module.exports = router; 