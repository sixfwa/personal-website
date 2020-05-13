import React from "react"
import Card from "./items/card"

import ItemListStyles from "./styles/itemlist.module.scss"
const ItemList = () => {
  return (
    <div className={ItemListStyles.container}>
      <Card title="status" emoji="🦊" content="Job Hunting" />
      <Card title="Experience" emoji="👨‍💻" content="> 1 Year" />
      <Card
        title="Education"
        emoji="👨‍🎓"
        content="Computer Science Undergraduate"
      />
    </div>
  )
}

export default ItemList
