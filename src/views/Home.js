import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import ShowSearchResults from '../components/ShowSearchResults';
import UnsplashApiCall from '../helpers/unsplashApiCall';

export default function Home() {
  const [data, setPhotosResponse] = useState(null);
  const [query, setQuery] = useState('kids playing');

  useEffect(() => {
    UnsplashApiCall(query).then(setPhotosResponse);
  }, [query]);

  return (
  <>
    <Search setQuery={setQuery} />
    <ShowSearchResults data={data} />
  </>
  )
}
