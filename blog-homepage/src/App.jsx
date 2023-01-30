import ArticleCard from './ArticleCard'
import ArticleHeadingRow from './ArticleHeadingRow'
import YourArticles from './your-articles.json'
import MissedArticles from './missed-articles.json'
import './App.css'

function App() {
  const yourArticles = YourArticles.map((article, index) => {
    return (
      <li key={index}>
        <ArticleCard
          article={article}
          articleType='your'
        />
      </li>
    )
  });

  const missedArticles = MissedArticles.map((article, index) => {
    return (
      <li key={index}>
        <ArticleCard
          article={article}
          articleType='missed'
        />
      </li>
    )
  });

  return (
    <div className="App">
      <ArticleHeadingRow
        rowName='For you'
      />
      <div className='your-articles-container'>
        <ul>
          {yourArticles}
        </ul>
      </div>
      <ArticleHeadingRow
        rowName='In case you missed it'
      />
      <div className='missed-articles-container'>
        <ul>
          {missedArticles}
        </ul>
      </div>
    </div>
  );
}

export default App;
