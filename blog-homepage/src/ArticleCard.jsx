import React from 'react';
import ArticleBody from './ArticleBody';
import ArticleImage from './ArticleImage';


function ArticleCard({ article }) {
  const { title, description, image, author, postedDate, minutesToRead  } = article;

  return (
    <div className='article-app'>
      <ArticleImage
        image={image}
        altDescription={title}
      />

      <ArticleBody
        title={title}
        description={description}
        author={author}
        postedDate={postedDate}
        minutesToRead={minutesToRead}
      />
    </div>
  )
}

// function ArticleCard({ article }) {


//   return (
//     <div>
//       {/* <img src={article.image} alt={article.title}/>

//       <ArticleBody 
//         title={article.title}
//         description={article.description}
//         author={article.author}
//         date={article.date}
//         minutesToRead={article.minutesToRead}
//       /> */}
//     </div>
//   )
// }

export default ArticleCard
