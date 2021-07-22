import React from 'react'
import {Link} from "react-router-dom"
const NavBar = () => {
    return (
        <div>
            <Link to="/">Go to Home</Link>
            <Link to="/books/New">Go to BookForm</Link>
            <Link to="/books"> Go to BookList</Link>
        </div>
    )
}

export default NavBar
