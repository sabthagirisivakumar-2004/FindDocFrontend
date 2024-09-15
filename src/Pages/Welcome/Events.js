import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import NavBar from './Navbar'; // Adjust the import path as necessary
import "./Events.css";
import NewsCard from '../../Component/NewsCard';
import AboutUs from './AboutUs';

const EventPage = () => {
  const events = [
    {
      image: 'https://static.vecteezy.com/system/resources/previews/026/118/798/large_2x/medical-facilitiesgraphed-up-close-landscape-background-photo.jpg',
      title: 'Annual Health Fair',
      date: '15-18 Aug 2024',
      description: 'Join us for a day of free health screenings, wellness workshops, and educational sessions. Open to the public.',
      location: 'Thiruvadanthai Beach, ECR',
      link: '#',
    },
    {
      image: 'https://nsmg.live/wp-content/uploads/sites/3/2023/11/2-1024x535.png',
      title: 'Cardiology Conference 2024',
      date: '2 Aug 2024',
      description: 'A comprehensive conference focusing on the latest advancements in cardiology. Featuring keynote speakers and interactive sessions.',
      link: '#',
    },
    {
      image: 'https://www.lebonheur.org/contentAsset/image/b344356b-eec0-4eda-bcda-6dfc2aad1b2c/fileAsset/filter/Resize,Jpeg/resize_w/1366/resize_h/637/jpeg_q/80/jpeg_p',
      title: 'Flu Vaccine Clinic',
      date: 'Every Sunday till September | 4PM - 6PM',
      description: 'Get your flu vaccine at our walk-in clinic. No appointment needed. Available for all ages.',
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
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 2500,  // Set the speed for autoplay (3 seconds)
  };

  return (
    <div>
      <NavBar />
      <div className="event-page">
      <h1 style={{marginLeft:"450px"}}>Medical Events</h1>
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
