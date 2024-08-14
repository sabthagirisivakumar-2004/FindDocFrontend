// NewsPage.js

import React from 'react';
import './NewsCard.css';

const newsArticles = [
  {
    image: 'https://d3b6u46udi9ohd.cloudfront.net/wp-content/uploads/2022/03/21075108/Types-of-blood-cancer_11zon.jpg',
    title: 'Medical Breakthrough in Cancer Treatment',
    date: 'August 6, 2024',
    author: 'medicalnews_admin',
    description: 'Scientists have made a significant breakthrough in cancer treatment by developing a new therapy that targets cancer cells more effectively.',
    link: '#',
  },
  {
    image: 'https://ysm-res.cloudinary.com/image/upload/c_limit,f_auto,h_810,q_auto,w_1440/v1/yms/prod/a7207433-df5c-49b7-a372-aef6a660c995',
    title: 'New Vaccine Shows Promise Against Malaria',
    date: 'August 5, 2024',
    author: 'medicalnews_admin',
    description: 'A new vaccine has shown promise in the fight against malaria, providing high levels of protection in clinical trials.',
    link: '#',
  },
  
  {
    image: 'https://cdn-dehic.nitrocdn.com/SUvoIAcuxgdkNoXKqdsQBPepeBLAiLrF/assets/images/optimized/rev-5567e65/thebreckinridge.com/wp-content/uploads/2023/09/genetic_testing_for_alzheimers_disease_the_breckinridge_memory_care_lexignton_ky_3.jpg',
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

    </div>
  );
};

export default NewsCard;