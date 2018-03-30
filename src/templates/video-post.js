import React from 'react'
import Link from 'gatsby-link'
import YouTube from 'react-yt'

const VideoPost = (data) => (
  <div>
    <h2>Videos</h2>
    <p>This will display youtube videos for now. Not sure how this should be managed yet.</p>
    <YouTube
      autoplay={true}
      videoId={data.pathContext.url}
    />
    <Link to="/">Back</Link>
  </div>
);

export default VideoPost