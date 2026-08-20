// src/routes/contactRoutes.js
import express from 'express';
import { handleContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validation.js';

const router = express.Router();

// Contact route with validation
router.post('/contact', validateContact, handleContact);

// Health check for contact route
router.get('/contact/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Contact route is working',
    timestamp: new Date().toISOString()
  });
});

export default router;
