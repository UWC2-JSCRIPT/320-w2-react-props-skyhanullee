import React from 'react'
import PropTypes from 'prop-types'

function ArticleImage({ image, altDescription, link }) {
  return (
    <a href={link} className='article-image-container'>
      <img className='article-image' src={image} alt={altDescription}/>
    </a>
  )
}

ArticleImage.propTypes = {
  image: PropTypes.string.isRequired,
  altDescription: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default ArticleImage