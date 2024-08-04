// uploadService.js
import axios from 'axios';

export const uploadFile = async (blob, fileName) => {
  try {
    const formData = new FormData();
    formData.append('file', blob, fileName);

    const response = await axios.post('https://webhook.site/d5d5c199-2681-4f91-b337-93b2ed2a4192', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
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
