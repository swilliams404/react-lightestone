import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitch,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import LogoL from '../../assets/images/Logo_Temp.png'
import LogoLY from '../../assets/images/Logo_Temp_Highlighted.png'
import './index.scss'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) {
          // if scroll down hide the navbar
          setShow(false)
        } else {
          // if scroll up show the navbar
          setShow(true)
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY)
      }
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar)

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar)
      }
    }
  }, [lastScrollY])

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img className="logo-main" src={LogoL} alt="logo" />
        <img className="logo-hover" src={LogoLY} alt="logo" />
      </Link>
      <nav className={`active ${show && 'hidden'}`}>
        ....
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/About"
        >
          ABOUT
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/Contact"
        >
          CONTACT
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.twitch.tv/riazey"
          >
            <FontAwesomeIcon icon={faTwitch} color="#9cad3b" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/Lightwing_Games"
          >
            <FontAwesomeIcon icon={faTwitter} color="#9cad3b" />
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UColYMRuH9jlV2ksnVo1Hjiw"
          >
            <FontAwesomeIcon icon={faYoutube} color="#9cad3b" />
          </a>
        </li>
      </ul>
    </div>
  )
}
export default Navbar
