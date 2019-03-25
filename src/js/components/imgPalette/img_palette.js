import React from 'react';

const ImgPalette = ({ list, mouseOver, selc }) => {
    return <ul className="img-list">
        {
            list.map((item, index) => {
                return <li key={index} className= {`img-list-item ${selc == item.type ? "active" :"" }`} >
                    <img src={item.url} style={{width : '40px'}} onMouseOver={mouseOver} data-value={item.type}/>
                </li>
            })
        }
    </ul>
}

export default ImgPalette;