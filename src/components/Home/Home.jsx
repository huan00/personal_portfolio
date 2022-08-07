import React from 'react'
import Profile from '../Profile/Profile'
import WorkStatus from '../WorkStatus/WorkStatus'
import Project from '../Project/Project'

import './styles.css'

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <WorkStatus />
      <Project />
    </div>
  )
}

export default Home
