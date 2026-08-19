export const validateContact = (req, res, next) => {
  const { username, email, message } = req.body;
  const errors = {};
  
  // Validate name
  if (!username || username.trim() === '') {
    errors.username = 'Name is required!';
  } else if (username.length < 2) {
    errors.username = 'Name must be at least 2 characters!';
  } else if (username.length > 50) {
    errors.username = 'Name is too long!';
  }
  
  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!email || email.trim() === '') {
    errors.email = 'Email is required!';
  } else if (!emailRegex.test(email)) {
    errors.email = 'Please enter a valid email!';
  }
  
  // Validate message
  if (!message || message.trim() === '') {
    errors.message = 'Message is required!';
  } else if (message.length < 20) {
    errors.message = 'Message must be at least 20 characters!';
  } else if (message.length > 1000) {
    errors.message = 'Message is too long!';
  }
  
  // If errors exist, return them
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      errors
    });
  }
  
  // Clean and sanitize data
  req.cleanData = {
    username: username.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim()
  };
  
  next();
};