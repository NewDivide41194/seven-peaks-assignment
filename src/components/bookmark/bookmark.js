import React from 'react'
import { Card } from '../../assets/card'

const Bookmark = ({orderedData}) => {
  return (
    <div className="grid-container">
    {orderedData.map((v, k) => (
      <Card
        key={k}
        normal
        title={v.webTitle}
        imgUrl={v.fields?.thumbnail}
        articleUrl={v.apiUrl}
      />
    ))}
  </div>
  )
}

export default Bookmark