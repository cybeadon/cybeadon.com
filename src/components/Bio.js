import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    const profilePic = 'https://avatars0.githubusercontent.com/u/5305600'

    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Sasivarnan R`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Sasivarnan R</strong> who lives and works in
          Bengaluru, India.{' '}
          <a href="https://twitter.com/iamsasivarnan">
            You should follow him on Twitter
          </a>
        </p>
      </div>
    )
  }
}

export default Bio
