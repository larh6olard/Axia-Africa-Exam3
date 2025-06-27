const mongoose = require('mongoose');

const KYCSchema = new mongoose.Schema({
  documentType: { 
    type: String, 
    required: true 
  },
  documentNumber: { 
    type: String, 
    required: true 
  },
  verified: { 
    type: Boolean, 
    default: false 
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
});

module.exports = mongoose.model('KYC', KYCSchema);
