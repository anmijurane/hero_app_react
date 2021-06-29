import React from 'react'
import { HeroList } from "../heroes/HeroList";

export function MarvelScreen() {
  return (
    <div>
      <HeroList publisher='Marvel Comics' />
    </div>
  )
}
