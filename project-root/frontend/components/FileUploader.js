import React, { useState } from 'react';
import axios from 'axios';
import ReactDropzone from 'react-dropzone';

const FileUploader = () => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);

  const handleFile1Upload = (acceptedFiles) => {
    setFile1(acceptedFiles[0]);
  };

  const handleFile2Upload = (acceptedFiles) => {
    setFile2(acceptedFiles[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file1', file1);
    formData.append('file2', file2);

    try {
      const response = await axios.post('http://backend-api-url/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Upload File 1</h2>
        <ReactDropzone onDrop={handleFile1Upload}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop file 1 here, or click to select files</p>
            </div>
          )}
        </ReactDropzone>
      </div>
      <div>
        <h2>Upload File 2</h2>
        <ReactDropzone onDrop={handleFile2Upload}>
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag and drop file 2 here, or click to select files</p>
            </div>
          )}
        </ReactDropzone>
      </div>
      <button onClick={handleUpload}>Upload Files</button>
    </div>
  );
};

export default FileUploader;