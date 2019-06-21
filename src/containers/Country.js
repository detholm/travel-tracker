import React from 'react'

const Country = (props) => {

    return(
      <div className={props.className} onClick={props.handleClick}>
      <p>{props.country.name}</p>
      </div>
    )
  }

export default Country;
