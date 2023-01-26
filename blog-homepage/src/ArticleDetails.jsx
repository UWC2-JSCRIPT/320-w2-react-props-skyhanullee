import React from 'react'

function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead }) {
  function formattedDate(date) {
    return new Date(date).toLocaleDateString('en-Us', 
      {month: 'short', day: 'numeric'
    });
  };

  return (
    <div className='article-details'>
      <div className='author-image-container'>
        <img className='author-image' src={authorImage} alt={authorName}/>
      </div>
      <div className='addtional-info-container'>
        <h4>{authorName}</h4>
        <div>
          <p>{formattedDate(postedDate)}</p>
          <p> | </p>
          <p>{minutesToRead} min read</p>
        </div>
      </div>
    </div>
  )
}

export default ArticleDetails