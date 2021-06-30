import React, { useMemo, useState } from 'react';

import { useHistory, useLocation } from 'react-router-dom';
import SearchInput from '../ui/SearchInput'
import { useFilteredHero } from '../../hooks/useFilteredHero';
import { Card } from '../ui/Card';
import { useSaveSearch } from '../../hooks/useSaveSearch';

export default function Search() {

  const history = useHistory();
  const { search } = useLocation();
  const [searchInput, setSearchInput] = useState('name');
  const filterHero = useMemo(() => useFilteredHero(search), [search]);

  const searchHero = (e) => {
    e.preventDefault();
    const hero =  e.target[0].value;
    const type =  e.target[1].value;
    if( hero != '' ) {
      history.push(`?${type}=${hero}`);
      useSaveSearch(hero);
    }
  }

  return (
    <div className='columns '>
      <div className='column is-4'>
        <form onSubmit={searchHero}>
          <div className="columns">
            <div className="column">
              <div className="field">
                <label className="label" htmlFor='search_hero'>Search a Hero</label>
                <div className="control">
                  <SearchInput id='search_hero' search={searchInput} />
                </div>
              </div>
            </div>
            <div className="column">
              <label className="label" htmlFor='typeofsearch'> Search by </label>
              <div className="select">
                <select 
                  name="typeofSearch"
                  id="typeofsearch"
                  onChange={ ({ target }) => setSearchInput( target.value ) }
                >
                  <option value="name">Name</option>
                  <option value="id">Id</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className='column is-8'>
        <h1 className='title is-h1'> Resultados </h1>
        <div className="section is-flex is-flex-wrap-wrap">
        {filterHero.map( (hero) => (
          <Card
            key        = { hero.id }
            id         = { hero.id }
            hero       = { hero.name }
            realName   = { hero.biography['full-name'] }
            img        = { hero.image.url }
            aliases    = { hero.biography.aliases }
            seeMore
          />
        ))}
        </div>
      </div>
    </div>
  )
}
