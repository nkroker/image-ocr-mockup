// uploadService.js
import axios from 'axios';

export const uploadFile = async (blob, fileName) => {
  try {
    const formData = new FormData();
    formData.append('file', blob, fileName);

    return await axios.post('/dashboard', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content,
      },
    });
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
