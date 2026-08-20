const API_URL = process.env.NEXT_PUBLIC_SHAKIL_RENDER_API || 'https://nextjsportpolio.onrender.com';
export const contactService = {
  async send(data) {
  try {
    const url = `${API_URL}/contact`;
    console.log('📡 Sending to URL:', url);
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });


async send(data) {
  try {
    const url = `${API_URL}/contact`;
    console.log('📡 Sending to URL:', url);
    
    const response = await fetch(url, {
      // ... rest of your code
    });
      
      // Verify whether the response body is JSON to prevent unexpected token errors
      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const rawText = await response.text();
        console.error('Server returned a non-JSON response:', rawText);
        throw new Error(`Server returned status ${response.status}. Please check your backend logs.`);
      }

      if (!response.ok) {
        if (result && result.errors) {
          throw { type: 'validation', errors: result.errors };
        }
        throw new Error(result.message || 'Failed to send message');
      }

      return result;
    } catch (error) {
      if (error.type === 'validation') {
        throw error;
      }
      throw new Error(error.message || 'Network error. Please check your connection.');
    }
  }
};
