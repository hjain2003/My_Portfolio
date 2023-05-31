import React from 'react'
import './Card.css';

const Card = (props) => {
  return (
    <>
      <div className="outer_box">
        <div className="card_title"><h2>{props.project_name}</h2></div>
        <p>{props.description}</p>

        <div className="github_link">
          GITHUB
        </div>
      </div>
    </>
  )
}

export default Card
