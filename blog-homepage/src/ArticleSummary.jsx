import React from 'react'

function ArticleSummary({ title, description }) {
  return (
    <div className='article-summary'>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  )
}

export default ArticleSummary