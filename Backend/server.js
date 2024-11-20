const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const corsConfig = require('./middleware/corsConfig');
const adminRoutes = require('./routes/admin');

const app = express();

// Connect to database with error handling
connectDB()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection failed:', err.message);
        process.exit(1); // Exit with failure code
    });

// Middleware
app.use(express.json());
app.use(corsConfig);

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

// 404 Error Handling for undefined routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(`Error: ${err.message}`);
    
    res.status(err.status || 500).json({
        status: 'failure',
        message: err.message || 'Internal Server Error',
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
