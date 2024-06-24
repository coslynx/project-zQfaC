import axios from 'axios';

const uploadFiles = async (file1, file2) => {
  try {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    const res = await axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return res.data;
  } catch (error) {
    throw new Error('Error uploading files');
  }
};

export default uploadFiles;