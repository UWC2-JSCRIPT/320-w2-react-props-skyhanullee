import React from 'react'

function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead }) {
  return (
    <div className='article-details'>
      <img src={authorImage} alt={authorName}/>
      <h4>{authorName}</h4>
      <p>{postedDate}</p>
      <p>{minutesToRead} min read</p>
    </div>
  )
}

export default ArticleDetails