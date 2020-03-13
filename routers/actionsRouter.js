const express = require('express')
const router = express.Router()

const actionsDB = require('../data/helpers/actionModel');

//GET actions
router.get('/', (req,res) => {
    actionsDB
    .get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage:`Error:${err}`
        })
    });
});

//GET actions by /:id

//POST actions

//DELETE actions by /:id

//PUT actions by /:id


module.exports = router;