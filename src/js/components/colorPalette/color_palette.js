import React from 'react';

const ColorPalette = ({type, color, click}) =>(
    <div>
        {
            type.map((item)=>{
                let res = color.filter(i => i.id == item)
                return res.map((j ,index)=>{
                   return <img 
                            src={j.imgUrl} 
                            alt="" 
                            className="color-palette-img" 
                            onClick={click} 
                            data-value={j.title}/>
                })
            })

        }
    </div>
);

export default ColorPalette;