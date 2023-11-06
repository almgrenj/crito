import React, { useState, useEffect } from 'react';
import '../ArticleNews/ArticleNews.css';
import { Link } from 'react-router-dom';

const ArticleNews = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://win23-assignment.azurewebsites.net/api/articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Could not fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const parseDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return { day: '??', month: '??' };
    }
    return {
      day: date.getDate().toString(),
      month: date.toLocaleString('default', { month: 'short' }),
    };
  };

  return (
    <section className="news-articles-section">
      <div className="news-articles-header">
        <div className="news-articles-titles">
          <h2 className="news-articles-header-subtitle">Our News & Articles</h2>
        </div>
      </div>
      
      <div className="news-articles-gallery">
        {articles.map((article) => {
          const { day, month } = parseDate(article.date);
          return (
            <div key={article.id} className="news-article">
              <Link to={`/newsdetails/${article.id}`} className="news-article-link">
                <img src={article.imageUrl} alt={article.title} />
                <h2>{article.category}</h2>
                <h3>{article.title}</h3>
              </Link>
              <div className="news-date-box">
                <div className="day">{day}</div>
                <div className="month">{month}</div>
              </div>
              <p>{article.summary}</p>
            </div>
          );
        })}
      </div>

      <div className="news-pagination">
    <button className="pagination-button"><i className="fas fa-chevron-left"></i></button>
    <button className="pagination-number">1</button>
    <button className="pagination-number">2</button>
    <button className="pagination-number">3</button>
    <button className="pagination-dots">...</button>
    <button className="pagination-number">9</button>
    <button className="pagination-button"><i className="fas fa-chevron-right"></i></button>
</div>
    </section>
  );
};

export default ArticleNews;