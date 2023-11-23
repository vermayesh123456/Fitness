import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    <div>
      <nav style={{fontFamily:'nosifer'}} class="navbar bg-transparent m-2 px-4 rounded-1">
            <div class="nav">
                <Link to="/create-student" class="nav-link text-white bg-danger m-2 rounded-5">Plan Exercise</Link>
                <Link to="/student-list" class="nav-link text-white bg-danger m-2 rounded-5">Exercise History</Link>
            </div>
        </nav>
    </div>
  )
}

export default Nav
