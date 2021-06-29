import React, { useEffect, useState } from 'react'
import { FcSearch } from 'react-icons/fc';
import { searchBy } from '../../selectors/searchBy';

export default function SearchInput({ id, search }) {

  const [dataBySearch, setDataBySearch] = useState([]);

  useEffect(() => {
    const data = searchBy(search);
    setDataBySearch( [...data] );
  }, [search])

  return (
    <>
      <p className="control has-icons-left">
        <input
          className="input is-rounded"
          type="text"
          autoComplete="off"
          placeholder="Search"
          id={id}
          list='searchItems'
        />
        <span className="icon is-left">
          <FcSearch />
        </span>
      </p>
      <datalist id='searchItems'>
        {dataBySearch.map((item, i) => (
          <option key={`${item}_${i}`} value={item} />
        ))}
      </datalist>
    </>
  )
}
