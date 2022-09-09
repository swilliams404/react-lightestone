import './index.scss'
import Rating from './../../../assets/images/Footer_Rating_P.png'
import Lightwing from './../../../assets/images/Footer_Lightwing.png'
import Copyright from './../../../assets/images/Footer_Credits.png'

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-rating">
        <img
          src={Rating}
          className="rating"
          alt="rate"
          to="https://www.esrb.org/"
        />
      </div>
      <div className="footer-lightwing">
        <img
          src={Lightwing}
          className="lightwing-footer"
          alt="lightwing-footer"
          to="/Home"
        />
      </div>
      <div className="footer-copyright">
        <img src={Copyright} className="copyright" alt="copyright" />
      </div>
    </div>
  )
}

export default Footer
