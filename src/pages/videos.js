import React from 'react'
import Link from 'gatsby-link'
import VideoMenu from '../components/VideoMenu'

const Videos = () => (
  <div>
    <VideoMenu/>
    <h2>Videos</h2>
    <p>This is the videos landing page. It should probably have a list of videos to click on?</p>
    <Link to="/">Back</Link>
  </div>
);

export default Videos