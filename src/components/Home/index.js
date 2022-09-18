import './index.scss'
import ContentVideo from '../../assets/videos/hero-video.mp4'
import Customize from './Customize'
import Tame from './Tame'
import Socialize from './Socialize'
import Preview from './Preview'
import Twitch from './Twitch'

const Home = () => {
  return (
    <div className="container-hero-page">
      <div className="container-hero">
        <video src={ContentVideo} autoPlay loop muted />
        <source type="video/mp4" />
        <h1>LIGHTESTONE</h1>
        <p>A Dragon Farming Saga</p>
      </div>
      <div>
        <Customize />
      </div>
      <div>
        <Tame />
      </div>
      <div>
        <Socialize />
      </div>
      <div>
        <Preview />
      </div>
      <div>
        <Twitch />
      </div>
    </div>
  )
}

export default Home
