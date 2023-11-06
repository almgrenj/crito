
import React, { useState, useEffect } from 'react';
import './Article.css';
import { Link } from 'react-router-dom';

const ArticleSection = () => {
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
      day: date.getDate().toString().padStart(2, '0'),
      month: date.toLocaleString('default', { month: 'short' }),
    };
  };

  const displayedArticles = articles.slice(0, 3);

  return (
    <section className="articles-section">
      <div className="articles-header">
        <div className="articles-titles">
          <h3 className="articles-header-title">Article & News</h3>
          <h2 className="articles-header-subtitle">Get Every Single Articles & News</h2>
        </div>
        <Link to="/news" className="browse-articles-button">
          Browse Articles <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
      
      <div className="articles-gallery">
        {displayedArticles.map((article) => {
          const { day, month } = parseDate(article.date);
          return (
            <div key={article.id} className="article">
              <Link to={`/newsdetails/${article.id}`}>
                <img src={article.imageUrl} alt={article.title} />
                <h2>{article.category}</h2>
                <h3>{article.title}</h3>
              </Link>
              <div className="date-box">
                <div className="day">{day}</div>
                <div className="month">{month}</div>
              </div>
              <p>{article.summary}</p>
            </div>
          );
        })}
      </div>
      
      <div className="dots">
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
</div>

    </section>
  );
};

export default ArticleSection;