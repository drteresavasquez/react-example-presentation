import React from 'react';
import Card from './Card';

export default function ShowSearchResults({ data }) {
  if (data === null) {
    return <div>Loading...</div>;
  } else if (data.errors) {
    return (
      <div>
        <div>{data.errors[0]}</div>
        <div>PS: Make sure to set your access token!</div>
      </div>
    );
  } else {
    return (
      <>
        <div className='video-card-wrapper'>
          {data.response.results.map((photo) => (
            <Card key={photo.id} photo={photo} />
          ))}
        </div>
      </>
    );
  }
}
