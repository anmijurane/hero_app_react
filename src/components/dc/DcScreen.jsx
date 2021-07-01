import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import { HeroList } from "../heroes/HeroList";


export function DcScreen() {
  useSetTitle('Marvel Heroes Comics');
  return (
    <div>
      <HeroList publisher='DC Comics' />
    </div>
  )
}
