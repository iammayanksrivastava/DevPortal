const mongoose = require('mongoose');

const domainSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
});


const Domain = mongoose.model('Domain', domainSchema);

module.exports = Domain;
