import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './src/routes/contactRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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


// app.listen(PORT, () => {
//   console.log(`🚀 Server running on http://localhost:${PORT}`);
//   console.log(`📧 Sending emails from: ${process.env.EMAIL_USER}`);
//   console.log(`📬 Receiving emails at: ${process.env.EMAIL_TO}`);
// });

export default app;

