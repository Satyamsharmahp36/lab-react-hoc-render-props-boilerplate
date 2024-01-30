import React, { useState } from 'react'


export default function LikePost(props) {

  return (
    <div>
      <button onClick={props.functionality}>Like Post {props.count}</button>
    </div>
  )
}
