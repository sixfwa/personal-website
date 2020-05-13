import React from "react"

import cardStyles from "./card.module.scss"

const Card = ({ title, emoji, content }) => {
  return (
    <div className={cardStyles.card}>
      <h3>{title}</h3>
      <h2>
        <span role="img">{emoji}</span>
      </h2>
      <h4>{content}</h4>
    </div>
  )
}

export default Card
