import { useState } from "react";

const ColorChange = () => {
    const [color, setColor] = useState("#FFFFFF")
    const colorSetChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <>
        <h1>color change</h1>
        <p>color : {color}</p>
        <p className="w-[100px] h-[100px] border-2 border-red-500" style={{background: color}}> change color</p>
        <input type="color" value={color} onChange={colorSetChange}/>
        </>
    )
}
export  default ColorChange;