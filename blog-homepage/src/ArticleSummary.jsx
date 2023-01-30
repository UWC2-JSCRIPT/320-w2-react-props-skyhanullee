import React from 'react';
import PropTypes from 'prop-types';

function ArticleSummary({ title, description, link }) {
  return (
    <div className='article-summary-container'>
      <h2 className='article-summary-title'>
        <a href={link}>{title}</a>
      </h2>
      <p className='article-summary-description'>
        <a href={link}>{description}</a>
      </p>
    </div>
  )
}

ArticleSummary.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default ArticleSummary