'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const Domain = require('../models/domain');
const validDomains = require('../data/domain'); // Import the list of domains from data/domains.js


const uri='mongodb+srv://mayank:B77v7ZIs5JaE3DfN@cluster0.f2t3i.mongodb.net/devportal'


/// Connect to MongoDB
mongoose
.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(async () => {
  console.log('Connected to MongoDB');

  // Populate the Domain collection
  validDomains.forEach(async (domainName) => {
    try {
      const existingDomain = await Domain.findOne({ name: domainName });
      if (!existingDomain) {
        const domain = new Domain({ name: domainName });
        await domain.save();
        console.log(`Added domain: ${domainName}`);
      }
    } catch (error) {
      console.error(`Error populating domains: ${error.message}`);
    }
  });  
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});