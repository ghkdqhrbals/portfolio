import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
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
              idx={5}
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

            <p style={{ marginTop: 0 }}>
              Extensive research on network vulnerabilities in <label className='upgrade'>Blockchain</label> Geth client.
              Geth is made up with Golang and it is one of Ethereum blockchain client which is used by 85% of Ethereum users.
              In Geth client, I found <label className='upgrade2'>3</label> new vulnerabilities(e.g. Delayed outbound connection, Routing Table Node Drop, RPC Packet Drop) in network implementation.
              With these vulnerabilities, I design Eclipse Attack Module and successfully delay <label className='upgrade2'>20</label> times(above Geth 1.9.25 version).
            </p>
            <p>
              As I'm a person who wants to know more about <label className='upgrade'>Backend</label>, I have experience with the following experience.
              <label className='upgrade3'> Golang</label> for server-side development language.
              <label className='upgrade3'> GitActions with Docker & Kubernetes </label> for Continuous Integration and Deployment
              <label className='upgrade3'> AWS-Cloud </label>(EC2, Elastic Kubernetes Service, RDS, Elastic Container Registry, Route-53, etc.) for setting infrastructure.
              <label className='upgrade3'> RDS </label> for storing data.
              <label className='upgrade3'> MockDB </label> for testing database.
              Apply <label className='upgrade3'> TLS </label> in reverse proxy server(nginx) for safe communication.
            </p>

          </div >



        </div >
      </div >
      <Loader type="pacman" />
    </>
  )
}

export default About
