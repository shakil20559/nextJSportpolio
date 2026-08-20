const API_URL =
  process.env.NEXT_PUBLIC_SHAKIL_RENDER_API ||
  'http://localhost:10000/api';

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

      const result = await response.json();

      if (!response.ok) {
        if (result.errors) {
          throw {
            type: 'validation',
            errors: result.errors,
          };
        }

        throw new Error(result.message || 'Failed to send message');
      }

      return result;
    } catch (error) {
      if (error?.type === 'validation') {
        throw error;
      }

      throw new Error(
        error?.message || 'Network error. Please check your connection.'
      );
    }
  },
};