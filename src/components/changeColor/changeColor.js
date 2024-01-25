import React, { useState } from "react";
import "./changeColor.css";

// #122545

function ChangeColor(props) {

    let newColor = props.input;
    const colorBoxStyle = {color: newColor};


    return (
        <div className="colorbox" style={colorBoxStyle}>
            {newColor}
        </div>
    )
}



export default ChangeColor;