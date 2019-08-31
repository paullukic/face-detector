import React from 'react';
import './FaceDetector.css';

const FaceDetector = ({ imageUrl, box }) => {
    return(


            <div className="absolute mt2 center tc">
                <img  id='inputimage' src={imageUrl} width='500px' height='auto' alt='' className="mt2 center tc"></img>
                <div className='absolute bounding-box' style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>


    );
}

export default FaceDetector;