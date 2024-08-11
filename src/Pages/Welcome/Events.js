import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './Navbar'; // Adjust the import path as necessary
import "./Events.css"
import NewsCard from '../../Component/NewsCard';
import AboutUs from './AboutUs';

const EventPage = () => {
  const events = [
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'Tamil Nadu International Kite Festival',
      date: '15-18 Aug 2024',
      description: 'Show kites, music, kids carnival, food, shopping.',
      location: 'Thiruvadanthai Beach, ECR',
      link: '#',
    },
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'DARK - A Stand Up Comedy Special',
      date: '2 Aug 2024',
      description: 'By Aakash Mehta and Prakash Mehta',
      link: '#',
    },
    {
      image: 'https://graph.org/file/b0e894be7bf70ef6a53e8.jpg',
      title: 'Retire Early Master Class',
      date: 'Every Sunday till September | 4PM - 6PM',
      description: 'With Sharan Hegde',
      discount: '10% OFF',
      link: '#',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <NavBar />
      <div className="event-page">
      <Slider {...settings}>
      {events.map((event, index) => (
            <div key={index} className="event-slide">
            <img src={event.image} alt={event.title} />
            <div className="event-details">
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.description}</p>
                {event.discount && <p>{event.discount}</p>}
                <a href={event.link} className="book-now">
                  Book Now
                  </a>
              </div>
              </div>
          ))}
          </Slider>
          </div>
          <NewsCard />
          <AboutUs />
          </div>
        );
};

export default EventPage;