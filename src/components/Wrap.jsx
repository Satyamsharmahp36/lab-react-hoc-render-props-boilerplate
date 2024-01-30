import React, { useState } from 'react'


const UpdateComponent=(OriginalComponent)=>{

function Wrap(){

    const [likeImageCounter, setLikeImageCounter] = useState(0);

    const handleLikeImageCount = ()=>{
      setLikeImageCounter(likeImageCounter+1);
    }

  return (
        <OriginalComponent count={likeImageCounter} functionality={handleLikeImageCount}/>
  )
}
return Wrap;
}

export default UpdateComponent