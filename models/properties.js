const mongoose = require('mongoose');
const propSchema = new mongoose.Schema({
address: {
  type: String,
  required: true
  },
bedrooms: {
  type: Number
  },
price: {
  type: String
  },
image:{
    type:String
  },
agentid:{
  type:String
}
  })
module.exports = mongoose.model('properties',propSchema);
