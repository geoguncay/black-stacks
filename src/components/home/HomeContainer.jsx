import './home.css'
import logo from '../../assets/img/logo.png'
import hero from '../../assets/img/hero_waves.svg'
import hero2 from '../../assets/img/hero_waves2.svg'
import hero3 from '../../assets/img/hero_waves3.svg'

const HomeContainer = () => {
  return (
    <div className="container">
      <div className="home_container">
        <div className="tittle_home">
          <div className="tittle_home_container">
            <h1><span>IPVanish</span> Account Generator</h1>
          </div>
            <form action="#">
              <button className='btn_generate' type="submit">Generate</button>
            </form>
        </div>
        <div className="img_home">
          <img src={logo} alt="logo" />
        </div>
      </div>
      {/* <div className="waves">
      </div>   */}
      <div className="hero_waves">
        <img className='wave1' src={hero}alt="" />
        <img className='wave2' src={hero2}alt="" />
        <img className='wave3' src={hero3}alt="" />
      </div>
    </div>
  )
}

export default HomeContainer