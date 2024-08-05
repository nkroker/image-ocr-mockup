import React from 'react'
import ReactDOM from 'react-dom'
import { useState } from 'react';
import Navband from './util/navband';
import LeftPanel from './left/left_panel';
import RightPanel from './right/right_panel';

import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [blobUrl, setBlobUrl] = useState(null);
  const [apiResponse, setApiResponse] = useState(null);

  const handleBlobUrlChange = (url) => {
    setBlobUrl(url);
  };

  const handleApiResponseChange = (response) => {
    setApiResponse(response);
  };

  return (
    <div>
      <Navband/>
      <div className='container mt-5'>
        <LeftPanel onBlobUrlChange={handleBlobUrlChange} onApiResponseChange={handleApiResponseChange} />
        <br />
        <hr />
        <br />
        <RightPanel blobUrl={blobUrl} apiResponse={apiResponse} />
      </div>
    </div>
  );
}


export default Dashboard;
