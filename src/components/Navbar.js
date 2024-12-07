import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Navbar=(props)=> {
  const [searchQuery, setSearchQuery] = useState(""); // Search query state
  const handleSearch = (e) => {
    e.preventDefault();
    props.handleSearch(searchQuery); // Pass the query to the parent component
  };
  
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">FalconSight</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/world">World</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/nation ">Nation</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/business">Business</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/entertainment">Entertainment</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/general">General</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/health">Health</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/science">Science</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/sports">Sports</Link></li>
                 <li className="nav-item"><Link className="nav-link" aria-current="page" to="/technology">Technology</Link></li>
            </ul>
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input className="form-control me-2" type="search" placeholder="Search" value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="d-flex mx-2">
            <Link className="nav-link" aria-current="page" to="/login">Login</Link>
            <Link className="nav-link ms-2" aria-current="page" to="/signup">Signup</Link>
            {/* <Link className="nav-link" aria-current="page" to="/logout">Logout</Link> */}
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
