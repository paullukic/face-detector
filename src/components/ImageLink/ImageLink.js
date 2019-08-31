import React from 'react';

const ImageLink = ({onInputChange, onButtonSubmit}) => {
    return(
        <div>
            <p className='f3 tc white'>
                {'This Magic Owl will detect faces in your pictures. Give it a try.'}
            </p>
            <div className="w-70 center shadow-5">
                <input className='f4 pa2 w-70 center' type="text" onChange={onInputChange}></input>
                <button className='w-30 grow f4 link pa2 ph3 dib white bg-dark-blue'
                        onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>

    );
}

export default ImageLink;