import React from 'react'
import PropTypes from 'prop-types'

function ArticleHeadingRow({ rowName }) {
  return (
    <div className='article-heading-row'>
      <h1>{rowName}</h1>
    </div>
  )
}

ArticleHeadingRow.propTypes = {
  rowName: PropTypes.string.isRequired
};

export default ArticleHeadingRow