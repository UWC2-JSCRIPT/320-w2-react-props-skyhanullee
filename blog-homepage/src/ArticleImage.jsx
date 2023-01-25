import React from 'react'

function ArticleImage({ image, altDescription }) {
  return (
    <img className='article-image' src={image} alt={altDescription}/>
  )
}

export default ArticleImage