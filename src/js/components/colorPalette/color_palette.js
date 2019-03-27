import React from 'react';

const ColorPalette = ({type, color, click, sel}) =>(
    <div>
        {
            type.map((item)=>{
                let res = color.filter(i => i.id == item)
                return res.map((j ,index)=>{
                   return <img 
                            key = {index}
                            src={j.imgUrl} 
                            alt="" 
                            className={`color-palette-img  ${sel == j.title ? "active" : ""}` }
                            onClick={click} 
                            data-value={j.title}/>
                })
            })

        }
    </div>
);

export default ColorPalette;