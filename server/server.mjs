import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

console.log('🚀 Starting server...');
console.log('📂 Current directory:', process.cwd());

const app = express();
const PORT = process.env.PORT || 10000;

// CORS configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logger
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running!',
    timestamp: new Date().toISOString(),
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
  });
});

// Contact routes
app.use('/api', contactRoutes);

// 404 handler
app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    console.log(`❌ API route not found: ${req.method} ${req.url}`);

    return res.status(404).json({
      success: false,
      message: `API route not found: ${req.url}`,
    });
  }

  return res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);

  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error',
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log('✅ Server successfully started!');
  console.log(`🚀 Running on port: ${PORT}`);
  // console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
  // console.log(`📬 Receiving emails at: ${process.env.EMAIL_TO}`);
  // console.log(
  //   `🔗 Health check: http://localhost:${PORT}/api/health`
  // );
});

export default app;