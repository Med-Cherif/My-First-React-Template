import React, {Component} from "react";

import Home from './../Home/Home'
import Work from './../Work/Work'
import Portfolio from './../Portfolio/Portfolio'
import Profile from './../Profile/Profile'
import About from './../About/About'
import SocialMedia from './../SocialMedia/SocialMedia'
import Footer from './../Footer/Footer'

export default class AllCompo extends Component{
    render() {
        return(
            <div>
                <Home />
                <Work />
                <Portfolio />
                <Profile />
                <About />
                <SocialMedia />
                <Footer />
            </div>
        )
    }
}
