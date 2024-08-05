import React, { useState, useCallback } from 'react';
import Card from 'react-bootstrap/Card';
import { useDropzone } from 'react-dropzone';
import { uploadFile } from '../../sevices/uploadFile';


const LeftPanel = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    handleFileChange(file);
  }, [props]);

  const validateFile = (file) => {
    if (file.type.startsWith('image/')) {
      return true;
    } else {
      alert('Please select an image file.');
      return false;
    }
  }

  const handleFileChange = (file) => {
    if (!validateFile(file)) {
      return;
    }
    setSelectedFile(file);
    let blob;

    // Convert the file to a Blob
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onload = () => {
      const arrayBuffer = reader.result;
      blob = new Blob([arrayBuffer], { type: file.type });
      const blobUrl = URL.createObjectURL(blob);
      props.onBlobUrlChange(blobUrl);
      uploadFile(blob, file.name).then(response => {
        props.onApiResponseChange(response.data.data.result);
      });
    };
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const clickFileTag = event => {
    event.preventDefault();
    document.getElementById("file-tag").click();
  };

  const onFileChange = event => {
    const file = event.target.files[0];
    handleFileChange(file);
  };

  return (
    <div className="col-sm-12">
      <Card className='mx-auto w-50' style={{ borderStyle: "dashed" }} border='primary'>
        <Card.Body className='mx-auto' {...getRootProps()} style={{ cursor: 'pointer' }}>
          <input {...getInputProps()} id="file-tag" style={{ display: 'none' }} onChange={onFileChange} />
          {
            isDragActive ?
              <div>
                <p>Drop the files here ...</p>
                <span className="material-symbols-outlined" style={{ fontSize: '180px' }} onClick={clickFileTag}>
                  upload
                </span>
              </div>
            :
              <div>
                <span className="material-symbols-outlined" style={{ fontSize: '180px' }} onClick={clickFileTag}>
                  upload
                </span>
              </div>
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default LeftPanel;
