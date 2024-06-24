import React, { useState } from 'react';
import { CSVReader } from 'react-papaparse';

const ColumnMapper = () => {
  const [fileData, setFileData] = useState([]);

  const handleOnDrop = (data) => {
    setFileData(data);
  };

  const handleOnError = (error) => {
    console.log(error);
  };

  const handleOnRemoveFile = () => {
    setFileData([]);
  };

  return (
    <div>
      <CSVReader
        onDrop={handleOnDrop}
        onError={handleOnError}
        addRemoveButton
        onRemoveFile={handleOnRemoveFile}
      >
        <span>Drop CSV file here or click to upload.</span>
      </CSVReader>
    </div>
  );
};

export default ColumnMapper;