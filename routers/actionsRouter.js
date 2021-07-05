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
    actionsDB
    .get(id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(err => {
        message: `Error: ${err}`
    });
});

//POST actions
router.post('/', (req,res) => {
    actionsDB
    .insert(req.body)
    .then(() => {
        res.status(201).json(req.body);
    })
.catch(err => {
    res.status(500).json({
        errorMessage: `Error: ${err}`
    })
});
});

//DELETE actions by /:id
//this one is not working***
router.delete('/:id', (req,res) => {
    const { id } = req.params
    actionsDB
    .remove(id)
    .then(deleteAction => {
        res.status(201).json(deleteAction)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `Error: ${err}`
        })
    });
});

//PUT actions by /:id
router.put('/:id', (req,res) => {
    const { id } =req.params
    const updateAction = req.body
    actionsDB
    .update(id, updateAction)
    .then(updateAction => {
        res.status(200).json(updateAction);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `Error: ${err}`
        })
    });
});


module.exports = router;