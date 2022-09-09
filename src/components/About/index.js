import './index.scss'
import DragonFruit from '../../assets/images/Circle_Dragonfruit.png'
import Tomato from '../../assets/images/Circle_Tomato.png'
import Watermelon from '../../assets/images/Circle_Watermelon.png'
import Card from '../../assets/images/Card_cust.png'
import Menu from '../../assets/images/Content_Cust_TEMP.png'

const About = () => {
  return (
    <section>
      <div className="customize-box">
        <div className="customize-wrapper">
          <div className="left-column">
            <div className="customize-icons">
              <ul>
                <img src={DragonFruit} alt="DragonFruit" />
                <img src={Tomato} alt="Tomato" />
                <img src={Watermelon} alt="Watermelon" />
              </ul>
            </div>
            <div className="customize-card" />
            <img src={Card} alt="customize-card" />
          </div>
          <div className="right-column">
            <div className="Customizer-menu" />
            <img src={Menu} alt="customize-menu" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default About
