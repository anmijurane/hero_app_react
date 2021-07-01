import React from 'react'
import { IoMdArrowRoundBack } from 'react-icons/io';

import { Redirect, useHistory, useParams } from 'react-router-dom'
import useSetTitle from '../../hooks/useSetTitle';
import { getHeroById } from '../../selectors/getHeroById';
import Section from './submenu/Section';

export function HeroScreen() {

  const { heroeId } = useParams();
  const history = useHistory();
  
  const hero = getHeroById(heroeId);
  useSetTitle(hero.name);
  if( !hero ) {
    return <Redirect to='/NotFound' />;
  }

  const handleBack = () => {
    history.length <= 2 ?
    history.push('/') :
    history.goBack();
  }

  return (
    <div className='section' >

      <div className="buttons mb-4">
        <button 
          className='button is-medium'
          onClick={handleBack}
        >
          <span className='icon'>
            <IoMdArrowRoundBack />
          </span>
          {history.length <= 2 ? (
            <span>Go Home</span>
          ) : (
            <span>Back</span>
          )}
        </button>
      </div>

      <h1 className='title is-h1'>{`${hero.name} (${hero.appearance.race}) `} </h1>

      <div className='columns'>
        <div className='column is-4'>
          <figure className='image is-9by16'>
            <img src={hero.image.url} alt={hero.name} />
          </figure>
        </div>
        <div className='column is-8'>
          
          <Section title='Biography'  section={hero.biography}  />
          <Section title='Appearance' section={hero.appearance} />
          <Section title='Powerstats' section={hero.powerstats} />
          
        </div>
      </div>
    </div>
  )
}