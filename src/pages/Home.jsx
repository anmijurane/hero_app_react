import React, { useState } from 'react'
import useEncrypt from '../hooks/useEncrypt';
import useSetTitle from '../hooks/useSetTitle';

export default function Home() {
  useSetTitle('Home');
  const { decrypt } = useEncrypt();
  const [searchedWords] = useState(() => {
    const items = localStorage.getItem('itemsSearched');
    if( items ){
      return JSON.parse(decrypt(items, 'encryptjson'));
    }
    return [];
  });

  return (
    <>
    {searchedWords.length > 0 
    && (
      <>
        <h1 className="title is-h1">Buscados resientemente</h1>
        {searchedWords.map((item, i) => (
          <h3 key={`${item}_${i}`} className="subtitle is-h3">{item} </h3>
        ))}
      </>
    )}
    </>
  )
}
