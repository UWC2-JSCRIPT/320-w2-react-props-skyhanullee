import React from 'react';
import ArticleDetails from './ArticleDetails';
import ArticleSummary from './ArticleSummary';
import ArticleFeature from './ArticleFeature';
import PropTypes from 'prop-types';

// function ArticleBody({ title, description, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview }) {
function ArticleBody({ article }) {
  const { title, description, link, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview } = article;

  // const { name, image, isMediumMember } = author;

  return (
    <div className='article-body'>
      <div className='article-card-top-container'>
        <ArticleFeature
            featureName={'audio'}
            hasFeatureAvailable={hasAudioAvailable}
          />
          <ArticleFeature
            featureName={'member'}
            hasFeatureAvailable={memberPreview}
          />
          <ArticleSummary
            title={title}
            description={description}
            link={link}
          />
      </div>
      <div className='article-card-bottom-container'>
        <ArticleDetails
          authorImage={author.image}
          authorName={author.name}
          postedDate={postedDate}
          minutesToRead={minutesToRead}
          isMediumMember={author.isMediumMember}
        />
      </div>
    </div>
  )
}

ArticleBody.propType = {
  title: PropTypes.string.isRequired, 
  description: PropTypes.string.isRequired, 
  author: PropTypes.string.isRequired, 
  postedDate: PropTypes.string.isRequired, 
  minutesToRead: PropTypes.number.isRequired, 
  hasAudioAvailable: PropTypes.bool.isRequired, 
  memberPreview: PropTypes.bool.isRequired
};

export default ArticleBody