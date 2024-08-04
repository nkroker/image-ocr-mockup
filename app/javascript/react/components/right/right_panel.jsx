import PropTypes from 'prop-types';
import React from 'react'


function RightPanel({ blobUrl, apiResponse }) {
  return (
    <>
      <div className="col-sm-12">
        {blobUrl && (
          <div className="col-sm-6">
            <h4>Preview</h4>
            <img src={blobUrl} style={{ width: '100%' }} />
          </div>
        )}
        {apiResponse && (
          <div className="col-sm-6">
            <h4>API Response</h4>
            <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </>
  );
}

RightPanel.propTypes = {
  blobUrl: PropTypes.string,
  apiResponse: PropTypes.string,
};

export default RightPanel;
