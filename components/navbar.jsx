import React, { Component } from 'react';

const NavBar = (props) => { //函数组件只有render函数 把this都删掉
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    Navbar <span>Boxes Count: {props.boxesCount}</span>
                    </a>
            </div>
        </nav>
    );
}
 
export default NavBar;

