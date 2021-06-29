import queryString from 'query-string';
import { heroes } from '../data/heroes';

export function useFilteredHero( search ) {

  const forSearch = queryString.parse(search);
  const keys = Object.keys(forSearch)[0];
  const searchValue = forSearch[`${keys}`]?.toLocaleLowerCase();

  return heroes.filter( (hero) => hero[`${keys}`]
    ?.toLocaleLowerCase()
    ?.includes( searchValue ) 
  );

}
