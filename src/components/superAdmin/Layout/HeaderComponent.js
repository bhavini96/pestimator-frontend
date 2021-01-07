import React from 'react'
import { Link } from 'react-router-dom'
class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <a className="navbar-brand" href="#"><img src="/content/images/logo.png" /></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse navbar-light" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="profile-name">
                                            <div className="text">
                                                <h4>Super Admin<span>admin123@gmail.com</span></h4>
                                            </div>
                                            <div className="pro-pic">
                                                <span><i className="icon-user"></i></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" href="#">My Calculators</Link>
                                        <Link className="dropdown-item" href="#">Profile</Link>
                                        <Link className="dropdown-item" href="#">Staff Management</Link>
                                        <Link className="dropdown-item" href="#">State</Link>
                                        <Link className="dropdown-item" href="#">County</Link>
                                        <Link className="dropdown-item" to="/">Sign out</Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

            </>
        )
    }
}
export default HeaderComponent
