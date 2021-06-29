import React from 'react'

export default function Section({ title, section }) {

  const sectionItems = Object.keys( section );
  return (
    <>
      <h3 className="title is-3">{title}</h3>

      {sectionItems.map( item => (
        <p key={item} className="subtile is-4">
          <b className='has-text-danger'>{item}: </b>
          {section[item]}
        </p>
      ))}

      <hr className="has-background-primary-dark" />
    </>
  )
}
