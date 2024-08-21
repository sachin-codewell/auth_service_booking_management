const express = require('express');

const { serverConfig } = require('./config/index')

const app = express();

(async function setupAndRunServer() {
    app.listen(function(err) {
        if(!err){
            console.log(`server is running fine on port ${serverConfig.PORT}`);
            return ;
        }       
    });
})();