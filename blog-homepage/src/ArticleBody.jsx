import React from 'react';
import ArticleDetails from './ArticleDetails';
import ArticleSummary from './ArticleSummary';

function ArticleBody({ title, description, author, postedDate, minutesToRead }) {
  const { name, image } = author;
  return (
    <div className='article-body'>
      <ArticleSummary
        title={title}
        description={description}
      />

      <ArticleDetails
        authorImage={image}
        authorName={name}
        postedDate={postedDate}
        minutesToRead={minutesToRead}

      />
    </div>
  )
}

// function ArticleBody({ title, description, author, date, minutesToRead }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h4>{description}</h4>
//       {/* <img src={author.image} alt={author.name}/> */}
//       {/* <h4>{author.name}</h4> */}
//       <h5>{date}</h5>
//       <h5>{minutesToRead}</h5>
//     </div>
//   )
// }

export default ArticleBody