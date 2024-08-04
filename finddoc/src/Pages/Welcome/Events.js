import React, { useState, useEffect } from "react";
import EventCard from "../../Component/EventCard";
import EventSlideshow from "./EventSlideshow";
import NewsSlideshow from "../../Component/NewsCard";
import Nav from "../Welcome/Navbar";
import "./Events.css";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const dummyEvents = [
      {
        title: "Blood Donation Camp",
        date: "2024-08-01",
        location: "Community Center",
        description: "Join us for a blood donation camp and save lives!",
        image: "https://graph.org/file/72ecdd7fbc5feebdf6152.jpg", // Add image path
      },
      {
        title: "Health Checkup Camp",
        date: "2024-07-20",
        location: "City Hospital",
        description: "Free health checkups available for all.",
        image: "https://graph.org/file/553de9055c9498676166c.jpg", // Add image path
      },
      {
        title: "Vaccination Drive",
        date: "2024-07-29",
        location: "Town Hall",
        description: "Get vaccinated for free.",
        image: "https://graph.org/file/b0e894be7bf70ef6a53e8.jpg", // Add image path
      },
      // Add more events here
    ];

    const dummyNews = [
      {
        title: "New Health Initiative Launched",
        date: "2024-07-20",
        content:
          "A new health initiative has been launched to improve community health.",
      },
      {
        title: "COVID-19 Vaccination Drive",
        date: "2024-07-25",
        content:
          "A mass COVID-19 vaccination drive will take place this weekend.",
      },
      // Add more news items here
    ];

    setEvents(dummyEvents);
    setNews(dummyNews);
  }, []);

  const ongoingEvents = events.filter(
    (event) => new Date(event.date) <= new Date()
  );
  const upcomingEvents = events.filter(
    (event) => new Date(event.date) > new Date()
  );

  return (
    <>
      <Nav />
      <div className="events-page">
        <EventSlideshow events={ongoingEvents} />
        <h1>Ongoing Medical Events</h1>
        <div className="events-list">
          {ongoingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <h1>Upcoming Medical Events</h1>
        <div className="events-list">
          {upcomingEvents.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
        <h1>Medical News</h1>
        <NewsSlideshow newsItems={news} />
      </div>
    </>
  );
};

export default Events;
