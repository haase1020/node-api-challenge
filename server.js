const express = require('express')
const helmet = require('helmet')
const morgan=require('morgan')
const cors = require('cors')


const server=express();
server.use(helmet());
server.use(morgan('dev'));
server.use(express.json());
server.use(cors());


server.get('/', (req,res) => {
    res.send('testing app');

})

// const actionsRouter = require('./routers/actionsRouter.js');
const projectsRouter = require('./routers/projectsRouter');

// server.use('/api/actions', actionsRouter)
server.use('/api/projects', projectsRouter)

module.exports=server;


//completed Mandi Haase