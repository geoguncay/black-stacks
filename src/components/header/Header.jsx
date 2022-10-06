import { Link } from "react-router-dom"
import './header.css'

const Header = () => {
  return (
    <>
      <div className="container header_container">
        <div className="logo_header">
          <h1>
            <Link to={'/'}>
              <span>BlackAlts</span>
            </Link>
          </h1>
        </div>
        <div className="nav_menu">
          <ul>
            <li><Link to={'#'}>Discord</Link></li>
            <li className="drop_menu"><Link to={'#'}>Generator</Link> 
              <ul className="dropdown-content" >
                <li><Link to={'#'}>Minecracft</Link></li>
                <li><Link to={'#'}>Crunchroll</Link></li>
                <li><Link to={'#'}>Hulu</Link></li>
                <li><Link to={'#'}>IPVanish</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header