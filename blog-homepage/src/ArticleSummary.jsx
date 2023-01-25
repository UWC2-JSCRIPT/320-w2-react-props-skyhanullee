import React from 'react'

function ArticleSummary({ title, description }) {
  return (
    <div className='article-summary'>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ArticleSummary