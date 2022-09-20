import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoS from '../../assets/images/p.png'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faBlogger,
} from '@fortawesome/free-brands-svg-icons'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [' ', 'H', 'w', 'a', 'n', 'g', 'b', 'o', ' ', 'G', 'y', 'u', 'm', 'i', 'n']
  const jobArray = [
    'B',
    'a',
    'c',
    'k',
    'e',
    'n',
    'd',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={5}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>Backend Developer / Blockchain Analysist</h2>
          <Link to="/portfolio" className="flat-button">
            PROJECTS
          </Link>
          <a
            className="flat-button"
            href="https://ghkdqhrbals.github.io/"
            target="_blank"
            rel="noreferrer"
            style={{ marginLeft: 10 }}
          >
            STUDY BLOG
              </a>

        </div>


        <div className="simple">
          <img
            src={LogoS}
            alt="JavaScript,  Developer"
          />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
