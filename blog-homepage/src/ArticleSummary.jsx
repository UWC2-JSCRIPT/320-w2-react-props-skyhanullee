import React from 'react'

function ArticleSummary({ title, description }) {
  return (
    <div className='article-summary'>
      <h2 className='article-summary-title'>{title}</h2>
      <p className='article-summary-description'>{description}</p>
    </div>
  )
}

export default ArticleSummary