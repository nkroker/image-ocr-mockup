// uploadService.js
import axios from 'axios';

export const uploadFile = async (blob, fileName) => {
  try {
    const formData = new FormData();
    formData.append('file', blob, fileName);

    const response = await axios.post('/dashboard', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "X-CSRF-Token": document.querySelector("meta[name='csrf-token']").content,
      },
    });

    if (response.status === 200) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  } catch (error) {
    console.error('Error uploading file:', error);
  }
};
