const express = require('express');
const bodyParser = require('body-parser');
const {UserService} = require('./services/index');


const { serverConfig } = require('./config/index');
const apiroutes  = require('./routes/index')

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json())
app.use('/api', apiroutes);



(async function setupAndRunServer() {
    app.listen(serverConfig.PORT,()=>{
        console.log(`server is running fine on port ${serverConfig.PORT}`);
    })
    if(serverConfig.SyncDB){
        db.sequelize.sync({alter: true})
    }
})();
