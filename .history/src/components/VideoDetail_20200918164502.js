import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
      </div>
      <p>{video.snippet.description}</p>
    </div>
  );
};

export default VideoDetail;
