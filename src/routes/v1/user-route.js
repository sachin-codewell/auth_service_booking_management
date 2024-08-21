const express = require('express');

const router = express.Router();

router.get('/', function(req,res){
    console.log('running fine')
    return ;
})

module.exports = router;