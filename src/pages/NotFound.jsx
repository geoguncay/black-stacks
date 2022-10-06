import './notfound.css'
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="notFound">   
    <h1>Error 404 </h1>
    <h3>Page Not Found</h3>   
    <h2><Link to={'/'}>Back Home</Link></h2>
    </div>    
  )
}

export default NotFound