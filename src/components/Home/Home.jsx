import { useState } from 'react'
import Profile from '../Profile/Profile'
import WorkStatus from '../WorkStatus/WorkStatus'
import Project from '../Project/Project'
import Skill from '../Skill/Skill'

import './styles.css'
import Contact from '../Contact/Contact'

const Home = () => {
  const [titleColor, setTitleColor] = useState('white')

  const handleTitleColor = (color) => {
    setTitleColor(color)
  }

  return (
    <div className="home">
      <div className="home-content">
        <Skill handleTitleColor={handleTitleColor} />
        <Profile titleColor={titleColor} />
        <WorkStatus />
        <Project />
      </div>
      <Contact />
    </div>
  )
}

export default Home
