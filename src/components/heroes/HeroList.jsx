import React from 'react'
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { Card } from '../ui/Card';

export function HeroList({ publisher }) {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className='animate__animated animate__fadeIn'>
      <h1 className="title is-h1">{publisher}</h1>
      <div className="columns is-flex is-flex-wrap-wrap">
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
    </div>
  )
}
