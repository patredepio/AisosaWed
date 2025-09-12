const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'Wedding API Server is running!', timestamp: new Date() });
});

// API routes will be added here
// app.use('/api/auth', authRoutes);
// app.use('/api/photos', photoRoutes);
// app.use('/api/story', storyRoutes);
// app.use('/api/schedule', scheduleRoutes);
// app.use('/api/trivia', triviaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ message: 'API endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Wedding API server running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});