import express from 'express';
import { handleContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validation.js';
const router = express.Router();

// Contact route with validation
router.post('/contact', validateContact, handleContact);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default router;