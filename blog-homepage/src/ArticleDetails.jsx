import React from 'react'

function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead }) {
  return (
    <div className='article-details'>
      <img src={authorImage} alt={authorName}/>
      <h4>{authorName}</h4>
      <h5>{postedDate}</h5>
      <h5>{minutesToRead} min read</h5>
    </div>
  )
}

export default ArticleDetails