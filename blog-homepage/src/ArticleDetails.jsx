import React from 'react'
import PropTypes from 'prop-types'
import ArticleBookmark from './ArticleBookmark';

function ArticleDetails({ authorImage, authorName, postedDate, minutesToRead, isMediumMember }) {
  function formattedDate(date) {
    return new Date(date).toLocaleDateString('en-Us', 
      {month: 'short', day: 'numeric'
    });
  };

  return (
    <>
    <div className='article-details-container'>
      <div className='author-image-container'>
        <img className={`author-image ${isMediumMember ? 'medium-member' : ''}`} src={authorImage} alt={authorName} />

      </div>
      <div className='addtional-info-container'>
            <h3>{authorName}</h3>
            <div>
              <p>{formattedDate(postedDate)}</p>
              <p> | </p>
              <p>{minutesToRead} min read</p>
            </div>
          </div>

    </div>
    <div className='article-bookmark-container'>
        <ArticleBookmark />
      </div>
      </>
  )
}

ArticleDetails.propTypes = {
  authorImage: PropTypes.string.isRequired, 
  authorName: PropTypes.string.isRequired, 
  postedDate: PropTypes.string.isRequired, 
  minutesToRead: PropTypes.number.isRequired, 
  isMediumMember: PropTypes.bool.isRequired
}

export default ArticleDetails