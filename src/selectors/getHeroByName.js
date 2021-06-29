import { heroes } from "../data/heroes";

export const getHeroById = ( name = '' ) => {

  if ( name === '' ) {
    return [];
  }

  const nameAtSearch = name.toLocaleLowerCase();
  return heroes.filter( (hero) => hero.name.toLocaleLowerCase().includes( nameAtSearch ) );

}
