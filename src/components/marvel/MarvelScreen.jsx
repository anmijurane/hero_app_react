import React from 'react'
import useSetTitle from '../../hooks/useSetTitle';
import { HeroList } from "../heroes/HeroList";

export function MarvelScreen() {
  useSetTitle('Marvel Heroes Comics');
  return (
    <div>
      <HeroList publisher='Marvel Comics' />
    </div>
  )
}
