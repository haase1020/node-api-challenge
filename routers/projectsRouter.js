const express = require('express')
const router=express.Router()

const projectsDB = require('../data/helpers/projectModel')

//GET the projects
router.get('/', (req,res) => {
    projectsDB.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `Error:${err}`
        })
    })
})

//GET a project by /:id
router.get('/:id',(req,res) => {
    const { id } =req.params
    projectsDB.get(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage:`Error: ${err}`
        })
    });
});

//POST a project

//DELETE a project by /:id

//PUT a project by /:id



module.exports = router;