'use strict'


const server = require('server');




server.get('Show',(req,res,next)=>{

    var PageMgr = require('dw/experience/PageMgr');
    var page = PageMgr.getPage('myproductpage');

    if(page && page.isVisible()){
        if(page.hasVisibilityRules()){
            res.page(page.ID,{});
        }else{
            res.page(page.ID,{});
        }
    }else{
        res.print('error');
    }


    next();
})




module.exports = server.exports();
