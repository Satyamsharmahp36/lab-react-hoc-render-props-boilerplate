import React, { useState } from 'react'


export default function LikeImage(props) {

  return (
    <div>
      <button onClick={props.functionality}>Like Image {props.count}</button>
    </div>
  )
}
