const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
  formId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Form', 
    required: true 
},
  responses: [mongoose.Schema.Types.Mixed], // Stores user responses dynamically
  submittedAt: { type: Date, default: Date.now },
}, {timestamps: true});

module.exports = mongoose.model('Response', ResponseSchema);
