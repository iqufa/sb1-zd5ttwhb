import axios from 'axios';

type FormData = {
  name: string;
  phone: string;
  email: string;
  productId: string;
};

export async function submitForm(data: FormData) {
  // Replace this URL with your actual Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL';
  
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}