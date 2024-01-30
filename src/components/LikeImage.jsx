import React, { useState } from 'react'
import Wrap from './Wrap'

 function LikeImage(props) {

  return (
    <div>
      <button onClick={props.functionality}>Like Image {props.count}</button>
    </div>
  )
}
export default Wrap(LikeImage)