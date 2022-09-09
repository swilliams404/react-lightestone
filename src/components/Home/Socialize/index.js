import './index.scss'

import Hammer from './../../../assets/images/Circle_Hammer.png'
import Relationship from './../../../assets/images/Circle_Relationships.png'
import Bokchoy from './../../../assets/images/Circle_Bokchoy.png'
import Card from './../../../assets/images/Card_cust.png'
import Portrait from './../../../assets/images/Content_NPC_TEMP.png'

const Socialize = () => {
  return (
    <div className="socialize-container">
      <div className="socialize-wrapper">
        <div className="socialize-left-column">
          <div className="socialize-icons">
            <ul>
              <img src={Hammer} alt="Hammer" />
              <img src={Relationship} alt="Relationship" />
              <img src={Bokchoy} alt="Bokchoy" />
            </ul>
          </div>
          <div className="socialize-card">
            <img src={Card} alt="socialize-card" />

            <h1>Socialize!</h1>
            <div className="socialize-text-body">
              <p>
                Help Grow the town by recruiting and building homes for new
                residents.
                <p>
                  Get to know them during your free time, who knows- maybe
                  you'll even get married!
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="socialize-right-column">
          <div className="socialize-content">
            <img src={Portrait} alt="socialize-content" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Socialize
