import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Collabrators.css";
const imageObjects = [
  {
    id: 1,
    name: "Figma",
    src: "https://telegra.ph/file/30ba533d4c9a0668f4ec8.jpg",
  },
  {
    id: 2,
    name: "Image 2",
    src: "https://telegra.ph/file/c85c27d771e7b760c150c.jpg",
  },
  {
    id: 3,
    name: "Image 3",
    src: "https://telegra.ph/file/1c9beee9181d6d4f74d68.jpg",
  },
  {
    id: 4,
    name: "Image 4",
    src: "https://telegra.ph/file/79d0dbd7ebd609b8f1255.jpg",
  },
  {
    id: 5,
    name: "Image 5",
    src: "https://telegra.ph/file/be7217ba861f66e5a3432.jpg",
  },
];

const generateItems = (count, startIndex) => {
  return Array.from({ length: count }, (_, index) => ({
    id: startIndex + index,
    name: `Item ${startIndex + index + 1}`,
    image: imageObjects[index % imageObjects.length],
  }));
};

const App = () => {
  const [items, setItems] = useState(generateItems(20, 0));
  const scrollContainerRef = useRef(null);
  const scrollSpeed = 2; // Adjust the scroll speed as needed

  const fetchMoreItems = () => {
    const newItems = generateItems(20, items.length);
    setItems((prevItems) => [...prevItems, ...newItems]);
  };

  const scroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      container.scrollLeft += scrollSpeed;

      // If the user has scrolled to the end of the container, reset scroll position to the beginning
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - scrollSpeed
      ) {
        fetchMoreItems();
      }
    }
  };

  useEffect(() => {
    const intervalId = setInterval(scroll, 20); // Adjust the interval as needed
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <h1 className="Tools">ACCREDITION</h1>
      <div
        className="scroll-container"
        ref={scrollContainerRef}
        style={{ marginTop: "220px", height: "140px", borderColor: "white" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="item"
            style={{ backgroundColor: "white", borderColor: "white" }}
          >
            <img
              src={item.image.src}
              alt={item.image.name}
              className="item-image"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
