import React from 'react';
import axios from 'axios';

const DownloadButton = ({ generateCSV }) => {
  const handleDownload = async () => {
    try {
      const response = await axios.get('/api/generateCSV');
      const blob = new Blob([response.data], { type: 'text/csv' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'output.csv';
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CSV file:', error);
    }
  };

  return (
    <button onClick={handleDownload}>Download CSV</button>
  );
};

export default DownloadButton;