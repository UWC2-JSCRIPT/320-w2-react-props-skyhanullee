import React from 'react'
import PropTypes from 'prop-types'

function ArticleFeature({ featureName, hasFeatureAvailable }) {
  if (hasFeatureAvailable === true) {
    if (featureName === 'audio') {
      return <p className='audio-available'> Audio Available</p>
    }
    if (featureName === 'member') {
      return <p className='member-preview'>Member Preview</p>
    }
  }
  return null;
}

ArticleFeature.propTypes = {
  featureName: PropTypes.string.isRequired, 
  hasFeatureAvailable: PropTypes.bool.isRequired
};

export default ArticleFeature