import './styles.css'
import data from '../../assets/data.json'

const Skill = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  return (
    <div className="skill-container">
      {data.skills.map((skill, idx) => (
        <div
          className={`skill ${skill}`}
          style={{
            borderRadius: Math.round(Math.random()) === 1 ? '50px' : '0',

            left: `${Math.floor(
              Math.random() * (width * 0.7 - width * 0.05) + width * 0.05
            )}px`,

            top: `${Math.floor(
              Math.random() * (height * 0.7 - height * 0.1) + height * 0.1
            )}px`
          }}
          key={idx}
        >
          {skill}
        </div>
      ))}
    </div>
  )
}

export default Skill
