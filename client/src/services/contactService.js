const API_URL = process.env.NEXT_PUBLIC_SHAKIL_RENDER_API || 'https://nextjsportpolio.onrender.com/api' || 'http://localhost:10000/api';

export const contactService = {
  async send(data) {
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Verify whether the response body is JSON to prevent "Unexpected token '<'" parsing errors
      const contentType = response.headers.get('content-type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        // Handle HTML or plain text responses (e.g., Express or Render 5xx/4xx HTML pages)
        const rawText = await response.text();
        console.error('Server returned a non-JSON response:', rawText);
        throw new Error(`Server returned status ${response.status}. Please check your backend logs.`);
      }

      if (!response.ok) {
        // If validation errors exist
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
