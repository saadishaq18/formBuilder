const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
},
  title: { 
    type: String, 
    required: true 
},
description:{
    type:String,

},
  fields: [
    {
      type: { 
        type: String, 
        enum: ['text', 'checkbox', 'radio', 'select'], 
        required: true 
    },
      label: { 
        type: String, 
        required: true 
    },
      options: [String], // For 'checkbox' or 'radio' fields
    },
  ],
  shareableUrl: { type: String, required: true },
}, {timestamps: true});

module.exports = mongoose.model('Form', FormSchema);
