import React from 'react';
import { useHistory } from "react-router-dom";

export default function VideoCard(props) {
  let history = useHistory();
  const { image, heading, desc, url} = props;
  
  const handleClick = () => {
    history.push(`/video/${url}`);
  }
  return (
    <div className='video-card-wrapper'>
      <div className='card'>
        <img src={image} alt={desc} />
        <div className='info'>
          <h1>{heading}</h1>
          <p>
            {desc}
          </p>
            <button onClick={handleClick}>Read More</button>          
        </div>
      </div>
    </div>
  );
}
