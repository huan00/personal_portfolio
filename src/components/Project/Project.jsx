import { useEffect, useState } from 'react'

import './styles.css'
import data from '../../assets/data.json'

const Project = ({ idx, project }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const [iframeStyle, setIframeStyle] = useState({
    top: '100%',
    left: coords.x,
    display: ''
  })
  const [globalCoords, setGlobalCoords] = useState({ x: 0, y: 0 })
  const [projectLink, setProjectLink] = useState('')
  const projects = data.projects

  useEffect(() => {
    const handleWindowMouseMove = (e) => {
      setGlobalCoords({ x: e.screenX, y: e.screenY })
    }
    window.addEventListener('mousemove', handleWindowMouseMove)
  }, [])

  const handleHover = (link) => {
    setProjectLink(link)
    setIframeStyle({
      ...iframeStyle,
      top: coords.y * 0.12,
      left: coords.x * 0.1 + 100,
      display: 'block'
    })
  }

  const handleMouseOut = () => {
    setIframeStyle({
      ...iframeStyle,
      display: 'none'
    })
  }

  const handleMouseMove = (e) => {
    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY + e.target.offsetTop
    })
  }

  return (
    <div className="project">
      {projects.map((project, idx) => (
        <div key={idx} className="project-content">
          <div className="project-idx">{idx}/</div>
          <a href={project.link}>
            <div
              className="project-name-container"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseOut}
              onMouseEnter={() => handleHover(project.link)}
            >
              <div className="project-name">
                <p>{project.title}</p>
              </div>
              <div>
                {project.languages.map((language, idx) => (
                  <span key={idx}>{language} / </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      ))}
      <iframe
        className="iframe-hover "
        style={iframeStyle}
        src={projectLink}
      ></iframe>
    </div>
  )
}

export default Project
