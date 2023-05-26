import React from "react";
import ReactPlayer from "react-player";
import { useState } from 'react';


export default function VideoPlayer({ url }) {
  const [thumbnail, setThumbnail] = useState('');

  const handleSeek = (seconds) => {
    setThumbnail(`https://img.youtube.com/vi/${url}/maxresdefault.jpg`);
  };

  return (
    <div style={{width: '100%', height: '100%'}}>
      <ReactPlayer
        className="react-player"
        url={url}
        width="100%"
        height="100%"
        controls={true}
       onSeek={() => handleSeek(5)}
      />
      {thumbnail && <img src={thumbnail} alt="thumbnail" />}
    </div>
  );
}