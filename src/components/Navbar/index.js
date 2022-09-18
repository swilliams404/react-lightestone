import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faDiscord,
  faTwitch,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import LogoL from '../../assets/images/Logo_Temp.png'
import LogoLY from '../../assets/images/Logo_Temp_Highlighted.png'
import './index.scss'
import { useState } from 'react'

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  const handleNavExpanded = () => setIsNavExpanded(!isNavExpanded)

  // document.addEventListener('click', function handleNavExpanded(event) {
  //   const nav = document.querySelector('expanded primary-header')
  //   if (!nav.contains(event.target)) {
  //     handleNavExpanded
  //   }
  // })

  return (
    <header className="Header">
      <button
        className="mobile-nav-toggle"
        aria-controls="primary-header"
        data-toggle="expanded"
        data-target="primary-header"
        aria-expanded={!isNavExpanded ? false : true}
        aria-label="toggle navigation"
        onClick={handleNavExpanded}
      >
        <span className="sr-only">Menu</span>
      </button>
      <div
        className={`${isNavExpanded ? 'expanded ' : ''}primary-header`}
        id="primary-header"
      >
        {/* <div id="primary-header" className="primary-header" data-visible="false"> */}
        <div>
          <div className="logo">
            <Link className="logo-link" to="/">
              <img className="logo-main" src={LogoL} alt="logo" />
              <img className="logo-hover" src={LogoLY} alt="logo" />
            </Link>
          </div>
        </div>
        <nav>
          <div className="primary-nav">
            <NavLink
              exact="true"
              activeclassname="active"
              className="home-link"
              onClick={handleNavExpanded}
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="about-link"
              onClick={handleNavExpanded}
              to="/About"
            >
              ABOUT
            </NavLink>
            <NavLink
              exact="true"
              activeclassname="active"
              className="contact-link"
              onClick={handleNavExpanded}
              to="/Contact"
            >
              CONTACT
            </NavLink>
          </div>
        </nav>
        <div className="social-description" media="screen and (max-width:70em)">
          Follow us for more information about Lightestone!
        </div>
        <div className="social-nav">
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
                href="https://discord.gg/tWEPeztYr6"
              >
                <FontAwesomeIcon icon={faDiscord} color="#9cad3b" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
export default Navbar
