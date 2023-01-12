import React from "react";
import logo from '../Drawables/cake2.svg';
import './Header.css';

const Header = (props) =>{
return(
    <div className='div'>
        <h1>Triessy Pedidos Online</h1>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
)
}

export default Header;