import React from 'react';

const Navigation = () => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p className="f3 link dim light-blue underline pa3 pointer" style={{paddingRight: '40px'}}>Face Detector</p>
        </nav>
    );
}

export default Navigation;