import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { heroes } from '../data/heroes';
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
    <div className='columns'>
      <div className='column is-10 is-flex is-flex-wrap-wrap'>
        {heroes.map(hero =>(
          <Card
            key        = { hero.id }
            id         = { hero.id }
            hero       = { hero.name }
            realName   = { hero.biography['full-name'] }
            img        = { hero.image.url }
            occupation = { hero.work.occupation }
            aliases    = { hero.biography.aliases }
            seeMore
          />
        ))}
      </div>
      <div className='column is-2'>
      {searchedWords.length > 0 
        && (
          <div className='box'>
            <h1 className='notification title is-h1 mb-4 has-text-center'>Searched</h1>
            <div className="block">
              {searchedWords.map((item, i) => {
                const typeSearch = /\d/.test(item) ? 'id=' : 'name=' ;
                return (
                  <p key={`${item}_${i}`}>
                    <Link
                      to={`search?${typeSearch}${encodeURI(item)}`}
                      className='is-h3 is-Link my-4'
                    >
                      {item}
                    </Link>
                  </p>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
