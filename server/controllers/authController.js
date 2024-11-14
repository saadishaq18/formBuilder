// controllers/authController.js

const User = require('@models/User');
const jwt = require('jsonwebtoken');
const { successResponse, errorResponse } = require('@utils/response');


// Register a new user
const registerUser = async (req, res, next) => {
  const { email, password, name } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return errorResponse(res, {}, 'User already exists', 400);
    }

    const newUser = new User({ email, password, name });
    await newUser.save();

    // const payload = { userId: newUser._id };
    // const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return successResponse(res, {}, 'User registered successfully', 201);
  } catch (err) {
    next(err); // Pass error to errorMiddleware
  }
};

// Login a user
const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return errorResponse(res, {}, 'Invalid credentials', 400);
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return errorResponse(res, {}, 'Invalid credentials', 400);
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return successResponse(res, { token }, 'User logged in successfully');
  } catch (err) {
    next(err); // Pass error to errorMiddleware
  }
};

module.exports = { registerUser, loginUser };
