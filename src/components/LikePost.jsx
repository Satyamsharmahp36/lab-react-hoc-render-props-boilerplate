import React, { useState } from 'react'
import UpdateComponent from './Wrap'

 function LikePost(props) {

  return (
    <div>
      <button onClick={props.functionality}>Like Post {props.count}</button>
    </div>
  )
}
export default UpdateComponent(LikePost);