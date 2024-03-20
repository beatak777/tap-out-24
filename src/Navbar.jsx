import React from 'react';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top"> {/* Add fixed-top class */}
        <div className="container-fluid d-flex flex-column align-items-center"> {/* Add flexbox utilities */}
            <a className="navbar-brand mb-0 h1" href="#">TAP OUT 24'</a> {/* Add margin-bottom utility */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Programme
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">The Wake</a></li>
                                <li><a className="dropdown-item" href="#">Symposium</a></li>
                                <li><a className="dropdown-item" href="#">The Convo</a></li>
                                <li><a className="dropdown-item" href="#">Boys + Toys</a></li>
                                <li><a className="dropdown-item" href="#">Energise, Revitalise, Lobotomise</a></li>
                                <li><a className="dropdown-item" href="#">Frustration</a></li>
                                <li><a className="dropdown-item" href="#">Blue Bottle</a></li>
                                <li><a className="dropdown-item" href="#">Fuck You</a></li>
                                <li><a className="dropdown-item" href="#">Who</a></li>
                                <li><a className="dropdown-item" href="#">Case Affliction</a></li>
                                <li><a className="dropdown-item" href="#">Something is Burning</a></li>
                                <li><a className="dropdown-item" href="#">Feast Beast</a></li>
                                <li><a className="dropdown-item" href="#">Blue Bottle</a></li>
                                <li><a className="dropdown-item" href="#">Death Of An Idealist</a></li>
                                <li><a className="dropdown-item" href="#">Threads Of Eternity</a></li>
                                <li><a className="dropdown-item" href="#">Lovely Labels</a></li>
                                <li><a className="dropdown-item" href="#">Middle Ground</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Download Programme</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tickets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

