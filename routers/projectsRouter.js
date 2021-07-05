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
router.post('/', (req,res) => {
    const newProject = req.body
    projectsDB
    .insert(newProject)
    .then(newProject => {
        res.status(200).json(newProject);
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `Error: ${err}`
        })
    });
});

//DELETE a project by /:id
router.delete('/:id',(req,res) => {
    const { id } = req.params
    projectsDB
    .remove(id)
    .then(deleteProject => {
        res.status(201).json(deleteProject);
    })
    .catch(err => {
        res.status(500).jason({
            errorMessage: `Error ${err}`
        })
    });
});

//PUT a project by /:id
router.put('/:id', (req,res) => {
    const { id } = req.params
    const updateProject = req.body

    projectsDB.update(id, updateProject)
    .then(updateProject => {
        res.status(200).json(updateProject)
    })
    .catch(err => {
        res.status(500).json({
            errorMessage: `Error ${console.error}`
        })
    });
});

//completed by Mandi Haase

module.exports = router;