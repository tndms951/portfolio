import React, { Component } from 'react';
import './Header.css';



// const Header = (props) => (
//     <div className="nav">
//         <h1> hellojisu</h1>
//     </div> 
// )

class Header extends Component {
    render() {
        return (
            <div className="nav">
                <div className="logo">
                <a href="#">
                    JISU
                </a>
                </div>
                <div className="menu">
                <a href="#">
                    <span>MENU</span>
                    <span>
                        <b className="a"></b>
                        <b className="b"></b>
                        <b className="c"></b>
                    </span>
                </a>
                </div>
            </div>
           
        )
    }
}

export default Header;