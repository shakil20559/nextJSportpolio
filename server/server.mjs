import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

// Load environment variables
dotenv.config();

console.log('🚀 Starting server...');
console.log('📂 Current directory:', process.cwd());

const app = express();
const PORT = process.env.PORT || 10000;

// CORS configuration
app.use(cors({
  origin:
  //  process.env.CLIENT_URL ||
    'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  next();
});

// Health check at root
app.get('/', (req, res) => {
  res.status(200).json({ 
    success: true, 
    message: 'Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Health check at /api/health
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString() 
  });
});

// API routes - FIXED: Remove the wildcard syntax
app.use('/api', contactRoutes);

// 404 handler for API routes - FIXED: Use proper Express 5 syntax
app.use((req, res) => {
  // Only handle API routes
  if (req.path.startsWith('/api')) {
    console.log(`❌ API route not found: ${req.method} ${req.url}`);
    res.status(404).json({
      success: false,
      message: `API route not found: ${req.url}`
    });
  } else {
    // For non-API routes, return 404
    res.status(404).json({
      success: false,
      message: 'Route not found'
    });
  }
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('❌ Server error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal server error'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server successfully started!`);
  console.log(`🚀 Running on port: ${PORT}`);
  console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
  console.log(`📬 Receiving emails at: ${process.env.EMAIL_TO}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
