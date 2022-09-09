import './index.scss'
import DragonFruit from './../../../assets/images/Circle_Dragonfruit.png'
import Tomato from './../../../assets/images/Circle_Tomato.png'
import Watermelon from './../../../assets/images/Circle_Watermelon.png'
import Card from './../../../assets/images/Card_cust.png'
import Menu from './../../../assets/images/Content_Cust_TEMP.png'

const Customize = () => {
  return (
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
          <div className="customize-card">
            <img src={Card} alt="customized-card" />

            <h1>Character Customization</h1>
            <div className="text-body">
              <p>
                Ever wanted to play a character dressed in hot pink? No? Well
                here's your chance!
                <p>
                  Lightestone offers a wide variety of clothing on hand crafted
                  palettes! Be whoever you want to be!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="customize-right-column">
          <div className="Customizer-menu">
            <img src={Menu} alt="customize-menu" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Customize
