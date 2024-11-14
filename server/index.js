require('module-alias/register');
const express = require('express');
const connectDB = require('@config/db');
const dotenv = require('dotenv');
const routes = require('@routes/index'); // Import the index route
const errorMiddleware = require('@middleware/errorMiddleware');


dotenv.config();

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);


// Error handling middleware (should be added after all routes)
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
