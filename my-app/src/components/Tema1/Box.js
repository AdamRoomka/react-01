import React from 'react'

function Box(box) {
  let {margin, width, height, background_color} = box;
  return (
    <div Style={`margin: ${margin}; width: ${width}; height: ${height}; background-color: ${background_color};` }></div>
  )
}


export default Box;