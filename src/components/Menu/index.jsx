import { Link } from 'gatsby'
import React from 'react'



function Menu() {
    return (
        <nav>
            <Link activeStyle={{ color: 'green' }} activeClassName="active" to='/about'>About </Link> |
            <Link activeStyle={{ color: 'green' }} activeClassName="active" to='/contact'> Contact</Link>
        </nav>
    )
}

export default Menu