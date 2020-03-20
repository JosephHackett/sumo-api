const express = require('express');
const router = express.Router();
const resourcesQueryHelper = require('./ResourcesQueryHelper');

router.get('/kimarite', (res, req, next) => {
    resourcesQueryHelper.getAllKimarite()
    .then(data =>{
        req.status(200).json(data);
    })
    .catch(err => { console.log(err)});
});


module.exports = router; 