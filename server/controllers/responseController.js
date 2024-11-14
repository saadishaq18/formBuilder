const Response = require('@models/Response');
const Form = require('@models/Form');
const { successResponse, errorResponse } = require('@utils/response');

// Submit a response
const submitResponse = async (req, res, next) => {
  const { formId } = req.params;
  const { responses } = req.body;

  try {
    const form = await Form.findById(formId);
    if (!form) {
      return errorResponse(res, {}, 'Form not found', 404);
    }

    const response = new Response({
      formId,
      responses,
    });

    await response.save();
    return successResponse(res, response, 'Response submitted successfully', 201);
  } catch (err) {
    next(err); // Pass error to centralized error handler
  }
};

module.exports = { submitResponse };
