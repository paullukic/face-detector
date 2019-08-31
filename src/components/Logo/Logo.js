import React from 'react';
import Tilt from 'react-tilt';
import monster from './monst.png'
import './logo.css'

const Logo = () => {
    return(
        <div className="ma4 mt0 tc" style={{marginTop: '-80px'}}>
            <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} src={monster} alt=''></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;