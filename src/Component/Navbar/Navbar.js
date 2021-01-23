import React from 'react'
import { Link } from 'react-router-dom'

import {NavbarSection, Header, List, Links} from './NavbarStyle.js'

const Navbar = () => {
    return(
        <NavbarSection>
            <div className="container">
                <Header>
                    <div className="logo">
                        <h2 className="logo-text">Ultra Profile</h2>
                    </div>
                    <List className="ul-list">
                        <li className="list-item"><Link to="/"><Links href="#">Home</Links></Link></li>
                        <li className="list-item"><Links href="#">Work</Links></li>
                        <li className="list-item"><Links href="#">Portfolio</Links></li>
                        <li className="list-item"><Links href="#">Resume</Links></li>
                        <li className="list-item"><Links href="#">About</Links></li>
                        <li className="list-item"><Link to="/contact"><Links href="#">Contact</Links></Link></li>
                    </List>
                </Header>
            </div>
        </NavbarSection>
    )
}

export default Navbar