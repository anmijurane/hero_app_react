import { heroes } from '../data/heroes';

export const searchBy = ( searchby ) => {

  return heroes.map( (hero) => hero[searchby] );

}
