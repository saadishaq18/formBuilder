// controllers/formController.js

const Form = require('../models/Form');
const { successResponse, errorResponse } = require('../utils/response');
const { v4: uuidv4 } = require('uuid');


// Create a new form
const createForm = async (req, res, next) => {
  
  const { title, fields, description } = req.body;
  const userId = req.userId;

  try {
    const form = new Form({
      userId,
      title,
      description,
      fields,
      shareableUrl: uuidv4(),
    });

    await form.save();
    return successResponse(res, form, 'Form created successfully', 201);
  } catch (err) {
    next(err); // Pass error to errorMiddleware
  }
};

module.exports = { createForm };
