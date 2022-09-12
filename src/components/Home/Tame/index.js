import './index.scss'
import Radish from './../../../assets/images/Circle_Radish.png'
import IceCube from './../../../assets/images/Circle_Cube.png'
import Pepper from './../../../assets/images/Circle_Pepper.png'
import TameDragon from './../../../assets/images/Tame_dragon.png'
import CardNormal from './../../../assets/images/Card_2.png'

const Tame = () => {
  return (
    <div className="container-Tame">
      <div className="Tame-wrapper">
        <div className="Tame-left-column">
          <div className="Tame-content">
            <img src={TameDragon} alt="Tame-dragon" />
          </div>
        </div>
        <div className="Tame-right-column">
          <div className="Tame-icons">
            <ul>
              <img src={Radish} alt="Radish" />
              <img src={IceCube} alt="IceCube" />
              <img src={Pepper} alt="Pepper" />
            </ul>
          </div>
          <div className="Tame-card">
            <img src={CardNormal} alt="Card-right" />

            <h1>Tame Dragons!</h1>
            <div className="text-body">
              <p>
                Impress a wild dragon to invite them to live with you!
                <p>
                  While they will feed themselves if you tend to their needs and
                  become friends they might just lay eggs!
                </p>
                <p>Create a big happy family, or keep it small, up to you!</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tame
