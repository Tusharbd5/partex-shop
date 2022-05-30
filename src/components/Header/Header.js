import { faHamburger, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div onClick={() => { setOpen(!open) }} className='fa-icon'>
                {open ? <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHamburger}></FontAwesomeIcon>}
            </div>
            <div className={`nav-items ${open ? 'top' : 'no-top'}`}>
                <CustomLink className='a' to='/home'>HOME</CustomLink>
                <CustomLink className='a' to='/reviews'>REVIEWS</CustomLink>
                <CustomLink className='a' to='/dashboard'>DASHBOARD</CustomLink>
                <CustomLink className='a' to='/blogs'>BLOGS</CustomLink>
                <CustomLink className='a' to='/about'>ABOUT</CustomLink>
            </div>
        </nav>
    );
};

export default Header;