import React from 'react';



const Nav = () => {
    console.log("nav render");

    return (
        <nav className='teal lighten-2'>
            <div className='nav-wrapper container '>
                <a href='#!' className='brand-logo'>Movie App</a>
            </div>
        </nav>
    );
}

export default Nav;