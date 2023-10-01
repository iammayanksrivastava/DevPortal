const Domain = require('../models/domain')
const express = require('express');
const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());


//Create Domains
const createDomain = async (req, res) => {
  try {
    const { name } = req.body;
    const existingDomain = await Domain.findOne({name})

    if (existingDomain) {
      return res.status(400).json({
        error: 'Domain already exists'
      });
    }

    const newDomain = new Domain({
      name
    })
        
    await newDomain.save();
    res.status(201).json({
      message: 'Domain added successfully'
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: 'Internal server error'
    });
  }
};


//Get all Domains 

const getAllDomains = async(req,res) => {
    try{
        const domains = await Domain.find()
        res.status(201).json(domains)
    }
    catch(error) {
        console.log(error)
        res.status(500).json({
            error: 'Internal server error'
        })
    }
}


module.exports = {createDomain, getAllDomains}