// middleware/errorMiddleware.js

const { errorResponse } = require('@utils/response');

const errorMiddleware = (err, req, res, next) => {
  console.error(err); // Log error for debugging

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  
  return errorResponse(res, { details: err.details || {} }, message, statusCode);
};

module.exports = errorMiddleware;
