const jwt = require('jsonwebtoken');
const { errorResponse } = require('@utils/response');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  
  // Check if authorization header exists and starts with "Bearer "
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return errorResponse(res, {}, 'Authorization denied, no Bearer token provided', 401);
  }

  // Extract the token from the header
  const token = authHeader.split(' ')[1]; // 'Bearer token' -> 'token'

  try {
    // Verify the token and extract the user ID
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Attach userId to request object
    next(); // Continue to the next middleware or route handler
  } catch (err) {
    return errorResponse(res, {}, 'Token is not valid', 401);
  }
};

module.exports = authMiddleware;
