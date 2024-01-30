import React, { useState } from 'react'

export default function Wrapper(props){

    const [likeImageCounter, setLikeImageCounter] = useState(0);

    const handleLikeImageCount = ()=>{
      setLikeImageCounter(likeImageCounter+1);
    }

  return (
       <div>
        {/* we are accessing the propes send form app , but as we 
        gave function there , so here we invoke up that this function
        as propes.renderData() and then we pass our logic as arguments
        in this now see in app.jsx the logic arguments we send below 
        are used there and send to the like image and post components */}
        {props.renderData(likeImageCounter,handleLikeImageCount)}
       </div>
  )
}



