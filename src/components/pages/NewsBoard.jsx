import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import "./news.css";
import ScrollNewsItem from './ScrollNewsItem';

function NewsBoard({ category }) {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null); // State for error handling
  const [loading, setLoading] = useState(true); // State for loading

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=7e16f9d1087f489e81189745c7cda380`;
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.articles);
        setError(null); // Clear any previous error
      })
      .catch(error => {
        setError('Error fetching the news. Please try again later.');
        console.error('Error fetching the news:', error);
      })
      .finally(() => setLoading(false)); // Set loading to false after fetch completes
  }, [category]);

  return (
    <div>
      <div className='news-container'>
        <div className='title'>Breaking News</div>
        {loading && <div className='loading-message'>Loading...</div>} {/* Loading message */}
        {error && <div className='error-message'>{error}</div>} {/* Error message */}
        <div>
          <ul>
            {!loading && !error && articles.map((news, index) => (
              <li key={index} style={{ color: "white" }}>
                <ScrollNewsItem
                  title={news.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <br></br>
        <div className="text-center latestnews">
          Latest <span className=''>News</span>
        </div>
        {!loading && !error && articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            name={news.source.name}
            publishedAt={news.publishedAt}
          />
        ))}
      </div>
    </div>
  );
}

export default NewsBoard;
