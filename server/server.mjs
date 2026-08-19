import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Render পোর্টের জন্য এটি আবশ্যক

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route (Render-এর স্ট্যাটাস চেক করার জন্য ভালো)
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'Server is running!' });
});

app.use('/api', contactRoutes);

app.use((err, req, res, next) => {
  console.error('Server error:', err);

  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
  console.log(`📬 Receiving emails at: ${process.env.EMAIL_TO}`);
});

export default app;
