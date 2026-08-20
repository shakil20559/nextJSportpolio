import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || ['http://localhost:3000', 'https://your-frontend-url.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.url}`);
  next();
});

// Health check (at root)
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running!' });
});

// API routes
app.use('/api', contactRoutes);

// 404 handler
app.use((req, res) => {
  console.log(`❌ Route not found: ${req.method} ${req.url}`);
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
  console.log(`📬 Receiving emails at: ${process.env.EMAIL_TO}`);
});

export default app;
