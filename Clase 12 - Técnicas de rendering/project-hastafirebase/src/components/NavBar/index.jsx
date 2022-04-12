import React from 'react'
import CartWidget from '../CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <span className="navbar-brand">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        Brand
                    </Link>
                </span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/category/Human" style={{textDecoration: 'none'}}>
                                    Human
                                </Link>
                            </span>
                        </li>
                        <li className="nav-item">
                            <span className="nav-link">
                                <Link to="/category/Alien" style={{textDecoration: 'none'}}>
                                    Alien
                                </Link>
                            </span>
                        </li>
                    </ul>
                    <div style={{width: '50px', position: 'absolute', right: '50px', top: '5px'}}>
                        <CartWidget/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar