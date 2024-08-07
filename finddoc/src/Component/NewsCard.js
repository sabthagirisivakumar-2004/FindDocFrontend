// NewsPage.js

import React from 'react';
import './NewsCard.css';

const newsArticles = [
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'Medical Breakthrough in Cancer Treatment',
    date: 'August 6, 2024',
    author: 'medicalnews_admin',
    description: 'Scientists have made a significant breakthrough in cancer treatment by developing a new therapy that targets cancer cells more effectively.',
    link: '#',
  },
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'New Vaccine Shows Promise Against Malaria',
    date: 'August 5, 2024',
    author: 'medicalnews_admin',
    description: 'A new vaccine has shown promise in the fight against malaria, providing high levels of protection in clinical trials.',
    link: '#',
  },
  
  {
    image: 'https://graph.org/file/40e4a1407d30d3e51295a.jpg',
    title: 'Advancements in Alzheimer’s Research',
    date: 'August 4, 2024',
    author: 'medicalnews_admin',
    description: 'Researchers have made advancements in understanding Alzheimer’s disease, paving the way for new treatments.',
    link: '#',
  }
];

const NewsCard = () => {
  return (
    <div className="news-page">
      <h1>Our Latest News</h1>
      <div className="news-container">
        {newsArticles.map((article, index) => (
          <div key={index} className="news-card">
            <img src={article.image} alt={article.title} className="news-image" />
            <div className="news-details">
              <div className="news-meta">
                <span className="news-author">{article.author}</span>
                <span className="news-date">{article.date}</span>
              </div>
              <h2 className="news-title">{article.title}</h2>
              <p className="news-description">{article.description}</p>
              <a href={article.link} className="read-more">Read More</a>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-news">View All News</button>
    </div>
  );
};

export default NewsCard;