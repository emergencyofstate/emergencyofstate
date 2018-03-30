import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h2>A place to supplement my bad memory</h2>
    <p>This is a site to record things that my brain will not reliably store for me.</p>
    <ul>
      <li><Link to="/videos">Videos</Link></li>
      <li><Link to="/writings">Writings</Link></li>
      <li><Link to="/sounds">Sounds</Link></li>
    </ul>
  </div>
);

export default IndexPage
