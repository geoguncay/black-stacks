import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <>
      <div className="container header_container">
        <div className="logo_header">
          <h1>
            <Link to={'/'}>
              <span>BluesAlts</span>
            </Link>
          </h1>
        </div>
        <div className="nav_menu">
          <ul>
            <li><Link to={'#'}>Discord</Link> </li>
            <li className="drop_menu"><Link to={'#'}>Generator</Link> 
              <ul>
                <li>Minecracft</li>
                <li>Crunchroll</li>
                <li>Hulu</li>
                <li>IPVanish</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header