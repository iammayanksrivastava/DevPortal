const express = require('express');
const router = express.Router();
const domainController = require('../controller/domainController');



//Add New Domain

router.post('/', domainController.createDomain);


//Get all Domains 

router.get('/', domainController.getAllDomains);


module.exports = router;