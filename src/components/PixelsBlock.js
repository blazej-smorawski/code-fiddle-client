import React, { useState, useEffect } from 'react';
import "../styles/pixelsBlock.css"

function PixelsBlock(props) {
    const grid = props.pixels.map((row) => <div className='pixelsRow'>{row.map((pixel) => <div className="pixel"/>)}</div>);
    console.log('200 OK');
    return (
        <div className="pixelsBlock">{grid}</div>
    );
}

export default PixelsBlock;