import React, { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
    const [show, setshow] = useState(false);

    const toggle = () => {
        if (show == true) {
            setshow(false)
        };
        if (show == false) {
            setshow(true)
        };

        console.log(show);
    }

    return (
        <>
            <div className='navbar_box'>
                <div className="logo"><h2>LOGO</h2></div>
                <div className="menu_items">
                    <ul>
                        <li><a href='' className='nav_links'><span className='menu_no'>00. </span>About</a></li>
                        <li><a href='' className='nav_links'><span className='menu_no'>01. </span>Work</a></li>
                        <li><a href='' className='nav_links'><span className='menu_no'>02. </span>Contact</a></li>
                        <li><a href='' className='nav_links'><span className='menu_no'>03. </span>
                            <span className="resume_container">
                                Resume
                            </span>
                        </a>
                        </li>
                    </ul>
                    <div className='side_bar_button_container'>
                        <button className='toggle_button' onClick={toggle}>X</button>
                    </div>
                </div>
            </div>
            {
                show &&
                <div className='side_bar'>
                    <div className="sidebar_content">
                        <li><a href="" className="nav_links">About</a></li>
                        <hr />
                        <li><a href="" className="nav_links">Work</a></li>
                        <hr />
                        <li><a href="" className="nav_links">Contact</a></li>
                        <hr />
                        <li><a href="" className="nav_links">Resume</a></li>

                    </div>
                </div>
            }
        </>
    )
}

export default Navbar
