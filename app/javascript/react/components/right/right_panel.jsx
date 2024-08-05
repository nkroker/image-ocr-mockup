import PropTypes from 'prop-types';
import React from 'react'


function RightPanel({ blobUrl, apiResponse }) {
  return (
    <div className="col-sm-12">
      <div className="col-sm-6">
        {blobUrl && (
          <span>
            <h4>Preview</h4>
            <img src={blobUrl} style={{ width: '100%' }} />
          </span>
        )}
      </div>
      <div className="col-sm-6">
        {apiResponse && (
          <span>
            <h4>API Response</h4>
            <pre>{ apiResponse }</pre>
          </span>
        )}
      </div>
    </div>
  );
}

RightPanel.propTypes = {
  blobUrl: PropTypes.string,
  apiResponse: PropTypes.string,
};

export default RightPanel;
