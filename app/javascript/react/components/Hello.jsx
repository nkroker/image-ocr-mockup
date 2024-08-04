import React from 'react'
import { useState } from 'react';
import Navband from './util/navband';
import LeftPanel from './left/left_panel';
import RightPanel from './right/right_panel';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [blobUrl, setBlobUrl] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleBlobUrlChange = (url) => {
    setBlobUrl(url);
  };

  const handleApiResponseChange = (response) => {
    setApiResponse(response);
  };

  return (
    <>
      <div>
        <Navband />
      </div>
      <div className='container mt-5'>
        <LeftPanel onBlobUrlChange={handleBlobUrlChange} onApiResponseChange={handleApiResponseChange} />
        <hr />
        <RightPanel blobUrl={blobUrl} apiResponse={apiResponse} />
      </div>
    </>
  );
}

export default App;
