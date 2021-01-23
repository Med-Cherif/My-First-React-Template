import React, {Component} from "react";
import {BrowserRouter, Route} from 'react-router-dom'
import Contact from './Component/Contact/Contact'
import Navbar from './Component/Navbar/Navbar'
import AllCompo from './Component/AllCompo/AllCompo'


export default class App extends Component{
    render() {
        return(
            <BrowserRouter>
                <Navbar />
                <Route exact path="/" component={AllCompo} />
                <Route path="/contact" component={Contact} />
            </BrowserRouter>
        )
    }
}
