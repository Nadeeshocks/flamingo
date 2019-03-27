import React from 'react';
import ColorPalette from '../colorPalette/color_palette';

export default ({ assets, color_type, palette, onClickHandle, selectedColor }) =>(
    <div>
        <h4 className="text-c-12">IN THIS SET</h4>
        <ul>
            {
                assets.map((j, index) => {
                    return <li key={index}>
                        <span className="text-c-14 item-list">	{`${j.quantity} ${j.item}`} </span>
                    </li>
                })
            }
        </ul>
        <div className="divider light" />
        <h4 className="text-c-12">SELECT A HANDLE COLOR</h4>
        <p className="text-c-12">{selectedColor}</p>
        <ColorPalette type={color_type } color={palette} click={onClickHandle} sel={ selectedColor}/>
    </div>
)