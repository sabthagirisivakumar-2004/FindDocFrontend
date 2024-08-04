import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Collabrators.css";
const imageObjects = [
  {
    id: 1,
    name: "Figma",
    src: "https://graph.org/file/a162a5d037162a7828e86.jpg",
  },
  {
    id: 2,
    name: "Image 2",
    src: "https://graph.org/file/ffc11b377aacf7de3de63.jpg",
  },
  {
    id: 3,
    name: "Image 3",
    src: "https://graph.org/file/bdd751aa6059b70f82e62.jpg",
  },
  {
    id: 4,
    name: "Image 4",
    src: "https://graph.org/file/9b10e4a6973f437a8573e.jpg",
  },
  {
    id: 5,
    name: "Image 5",
    src: "https://graph.org/file/d8dab52a8673a2f95ee4a.jpg",
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
        style={{ marginTop: "220px", height: "140px", borderColor:"white" }}
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
