import React from 'react'
import { Link } from 'react-router-dom'

export function Card ({
  hero,
  id,
  realName,
  img,
  occupation,
  aliases,
  seeMore
  }) {
  return (
    <div className="column is-4">
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={img} alt="Placeholder image" />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{ hero }</p>
              <p className="subtitle is-6">{ realName }</p>
            </div>
          </div>
          <div className="content">
            {occupation !== '-' && (
              <>
                <hr />
                <strong>Occupation: </strong>
                {occupation}
              </>
            )}
            <hr />
            <strong>Aliases:</strong>
            {aliases[0] !== '-' ? (
              <>
                <p className='has-text-info'> {JSON.stringify( aliases , null, 1)} </p>
              </>
            ) : (
              <p className="has-text-danger">No Aliases</p>
            ) }
          </div>
          <hr />
          {seeMore && (
            <div className="has-text-right">
              <Link to={`/hero/${id}`}> See More </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
