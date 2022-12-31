'use strict'


const server = require('server');

server.extend(module.superModule);


server.append('Show',(req,res,next)=>{

    res.print('my product');


    next();
})




module.exports = server.exports();
