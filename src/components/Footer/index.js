import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <div style={{
    background: 'rebeccapurple',
    marginTop: '1.45rem',
  }}>
    <div style={{
      margin: '0 auto',
      maxWidth: 960,
      padding: '1.45rem 1.0875rem',
    }}><p style={{color: 'white', margin: 0,}}>Copy wright {new Date().getFullYear()}.</p></div>
  </div>
);

export default Footer;