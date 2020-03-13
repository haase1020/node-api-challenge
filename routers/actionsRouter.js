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
router.get('/:id',(req,res) => {
    const { id } = req.params
    actionsDB.get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        message: `Error: ${err}`
    });
});

//POST actions

//DELETE actions by /:id

//PUT actions by /:id


module.exports = router;