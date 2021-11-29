import React from 'react'






function BoxColor(props) {
    let r = props.r
    let g = props.g
    let b = props.b
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
      }
      
      function rgbToHex(r, g, b ) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
      
      
    let divStyle = { 
        
        backgroundColor: rgbToHex(r, g, b),
            };
        
        console.log(rgbToHex(r, g, b))    
            return (
        
                <div style={divStyle}><p>rgb({props.r}, {props.g}, {props.b}) </p>
               <p> {rgbToHex(r, g, b)}</p></div>
            )

}

export default BoxColor;
