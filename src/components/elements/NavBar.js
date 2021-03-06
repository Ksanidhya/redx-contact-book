import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand">
                Contact Book
                </a>
                <div>
                    <a className="btn btn-light ml-auto">Create Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
