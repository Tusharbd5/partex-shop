import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <CustomLink className='a' to='/home'>HOME</CustomLink>
            <CustomLink className='a' to='/reviews'>REVIEWS</CustomLink>
            <CustomLink className='a' to='/dashboard'>DASHBOARD</CustomLink>
            <CustomLink className='a' to='/blogs'>BLOGS</CustomLink>
            <CustomLink className='a' to='/about'>ABOUT</CustomLink>
        </nav>
    );
};

export default Header;