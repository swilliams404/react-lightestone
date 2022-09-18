import './index.scss'
import overlay from './../../../assets/images/Twitch.png'

const Twitch = () => {
  return (
    <div className="Twitch-container">
      <div className="Twitch-embed-flex">
        <img src={overlay} alt="embed"></img>
        <div className="Twitch-frame">
          <iframe
            title="Twitch-embed"
            src="https:/player.twitch.tv/?channel=riazey/&parent=http://localhost:3000/"
            height="300"
            width="533"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Twitch
