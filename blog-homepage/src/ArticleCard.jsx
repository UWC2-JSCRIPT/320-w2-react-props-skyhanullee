import React from 'react';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';
import PropTypes from 'prop-types';


function ArticleCard({ article, articleType }) {
  // const { title, description, image, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview } = article;
  const { title, image, link} = article;

  return (
    <div className={ `article-card-${articleType}` }>
      <ArticleImage
        image={image}
        altDescription={title}
        link={link}
      />

      <ArticleBody
        article={article}
      />
    </div>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  articleType: PropTypes.string.isRequired
};

export default ArticleCard
