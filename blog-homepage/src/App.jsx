import ArticleApp from './ArticleApp';
import ArticleHeadingRow from './ArticleHeadingRow';
import YourArticles from './_data/your-articles.json'
import MissedArticles from './_data/missed-articles.json'

function App() {
  const yourArticles = YourArticles.map((article, index) => {
    return (
      <li key={index}>
        <ArticleApp
        article={article}
        />
      </li>
    )
  });

  const missedArticles = MissedArticles.map((article, index) => {
    return (
      <li key={index}>
        <ArticleApp
        article={article}
        />
      </li>
    )
  });

  return (
    <div className="App">
      <div className='your-articles-container'>
        <ArticleHeadingRow
          rowName='For you'
        />
        <ul>
            {yourArticles}
        </ul>
      </div>

      <div className='missed-articles-container'>
        <ArticleHeadingRow
          rowName='In case you missed it'
        />
        <ul>
            {missedArticles}
        </ul>
      </div>
    </div>
  );
}

export default App;
