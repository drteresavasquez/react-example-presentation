import React from 'react';
import { useHistory } from 'react-router-dom';
import titleCase from '../helpers/titleCase';

export default function VideoCard({ photo }) {
  let history = useHistory();
  const { user, urls, description, alt_description } = photo;

  const handleClick = () => {
    history.push(`/video/${user.username}`);
  };
  
  return (
    <div className='card'>
      <img src={urls.regular} alt={alt_description} />
      <div className='info'>
        <p>{titleCase(description || 'A wonderful day in the neighborhood')}</p>
        <button onClick={handleClick}>Read More</button>
      </div>
    </div>
  );
}
