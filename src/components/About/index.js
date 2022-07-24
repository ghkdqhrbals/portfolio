import { useEffect, useState } from 'react'
import {
  faGolang,
  faAws,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import './blockchain.png'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">

        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />

          </h1>
          <p style={{ fontSize: 20, marginLeft: 20 }}>
            I'm naturally curious, always interested in learning new skills, and particularly interested in understanding the overall structure of system.
          </p>
          <div className="education">EDUCATION </div>
          <div className="container2">
            <div className="day">2020.09 - 2022.08</div>
            <div className="major">MS in Computer Engineering, Pusan National University</div>
            <div className="day">2014.03 - 2020.08</div>
            <div className="major">BS in Computer Sciences and Engineering, Pusan National University</div>
            <div className="day">2010.03 - 2013.02</div>
            <div className="major">Puil Foreign Language Highschool</div>
          </div>

          <div className="education">SKILLS </div>
          <div className='introduce'>

            <p style={{ fontSize: 20, marginTop: 0 }}>
              Extensive research on vulnerabilities in various <strong><font weight="600" size="5" color="#fc9350" >Blockchain</font></strong> platforms such as Ethereum and Bitcoin. Clear thinker and collaborative team worker.
            </p>
            <p style={{ fontSize: 20 }}>
              As I'm a person who wants to know more about <strong><font weight="600" size="5" color="#fc9350" > Backend </font></strong>, I have experience with the following skills.
              <strong><font weight="600" size="4" color="#f1ca74" > Golang </font></strong> for server-side development language.
              <strong><font weight="600" size="4" color="#f1ca74" > GitActions with Docker & Kubernetes </font></strong> for Continuous Integration and Deployment
              <strong><font weight="600" size="4" color="#f1ca74" > AWS-Cloud </font></strong>(Elastic Kubernetes Service, RDS, Elastic Container Registry, etc.) for setting infrastructure.
              <strong><font weight="600" size="4" color="#f1ca74" > RDS </font></strong> for storing data.
              <strong><font weight="600" size="4" color="#f1ca74" > MockDB </font></strong> for testing database. Apply
              <strong><font weight="600" size="4" color="#f1ca74" > TLS </font></strong> in reverse proxy server for safe communication.
            </p>

          </div>



        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faGolang} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3" >
              <img src={require('./blockchain.png')} width='100'
                height='100' color="#28A4D9" />
            </div>
            <div className="face4">
              <img src={require('./ai.png')} width='100'
                height='100' color="#28A4D9" />
            </div>
            <div className="face5">
              <img src={require('./python.png')} width='100'
                height='100' color="#28A4D9" />
            </div>
            <div className="face6">
              <label style={{ fontSize: 35 }} >Blockchain</label>
            </div>
          </div>
        </div>


      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
