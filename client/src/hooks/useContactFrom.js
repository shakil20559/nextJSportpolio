import { useState, useCallback } from 'react';
import { contactService } from '../services/contactService';


const INITIAL_STATE = {
  username: '',
  email: '',
  message: ''
};

export const useContactForm = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Reset status
    setStatus({ type: '', message: '' });
    setErrors({});
    
    try {
      setLoading(true);
      
      const result = await contactService.send(formData);
      
      setStatus({
        type: 'success',
        message: result.message
      });
      
      // Reset form after success
      setTimeout(() => {
        setFormData(INITIAL_STATE);
        setStatus({ type: '', message: '' });
      }, 3000);
      
    } catch (error) {
      if (error.type === 'validation') {
        setErrors(error.errors);
        setStatus({
          type: 'error',
          message: 'Please fix the errors below.'
        });
      } else {
        setStatus({
          type: 'error',
          message: error.message
        });
      }
    } finally {
      setLoading(false);
    }
  }, [formData]);

  const reset = useCallback(() => {
    setFormData(INITIAL_STATE);
    setErrors({});
    setStatus({ type: '', message: '' });
  }, []);

  const textLeft = 200 - formData.message.length;

  return {
    formData,
    errors,
    loading,
    status,
    textLeft,
    handleChange,
    handleSubmit,
    reset
  };
};