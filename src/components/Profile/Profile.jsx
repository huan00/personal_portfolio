import { useState } from 'react'
import Skill from '../Skill/Skill'

import './styles.css'

const Profile = ({ titleColor }) => {
  const [windowCoords, setWindowCoords] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })
  const [namePos, setNamePost] = useState({ x: 0, y: 0 })

  const handleScrollValue = (scrollx, scrolly) => {
    setNamePost({ ...setNamePost, x: scrollx, y: scrolly })
  }

  //make

  window.addEventListener('scroll', () =>
    handleScrollValue(window.scrollX, window.scrollY)
  )
  console.log(namePos)
  console.log(windowCoords)

  return (
    <div className="profile">
      <div
        className="profile-title1"
        style={{
          color: titleColor,
          left:
            namePos.y > windowCoords.height * 0.15
              ? windowCoords.height * 0.15
              : namePos.y,
          top:
            namePos.y > windowCoords.height * 0.15
              ? windowCoords.height * 0.15
              : namePos.y
        }}
      >
        <h1>&#60;SOFTWARE&#62;</h1>
      </div>
      <div
        className="profile-title2"
        style={{
          color: titleColor,
          left:
            namePos.y > windowCoords.height * 0.15
              ? windowCoords.height * 0.15
              : namePos.y,
          top:
            namePos.y > windowCoords.height * 0.15
              ? windowCoords.height * 0.15
              : namePos.y
        }}
      >
        <h1>&#60;/ENGINEER&#62;</h1>
      </div>
      <div
        className="profile-title-name myName"
        style={{
          color: titleColor,
          right:
            namePos.y > windowCoords.height * 0.22
              ? windowCoords.height * 0.22
              : namePos.y,
          bottom:
            namePos.y > windowCoords.height * 0.22
              ? windowCoords.height * 0.22
              : namePos.y
        }}
      >
        <h1>&#123;Huan Zeng&#125;</h1>
      </div>
    </div>
  )
}

export default Profile
