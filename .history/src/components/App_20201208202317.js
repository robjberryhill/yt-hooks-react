import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from "../hooks/useVideos";

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  //This is a custom hook
  //With this hook you can set a custom default search term to return a list of videos.
  const [videos, search] = useVideos("buildings");

  //In using a custom hook to return videos we will select a video evertime a list of videos is provided.
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // The onFormSubmit will provide a search term to the search function in the useVideos custom hook.
  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
