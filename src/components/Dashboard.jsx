import React from "react";
import { Link, useLocation } from "react-router-dom";
import CardsGrid from "./CardsGrid";

const Dashboard = ({ username }) => {
  const location = useLocation();
  if (!username && location.state && location.state.username) {
    username = location.state.username;
  }

  //calculate current date:
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getDaySuffix = (d) => {
    if (d > 3 && d < 21) return "th";
    switch (d % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };
  let formattedDate = `${day}${getDaySuffix(day)} ${
    monthNames[date.getMonth()]
  }, ${year}`;

  //adding caraousel images dynamically
  const carouselImg = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpg",
    "image4.jpg",
     "image5.jpg",
     "image6.jpg",
     "image7.jpeg",
     "image8.jpeg",
     "image9.jpeg",
  ];

  // importing images as per filenames
  const carouselImages = carouselImg.map((imageName) => {
    return `../../public/carousel/${imageName}`;
  });

  console.log(carouselImages);

  // Ref for the image container
  const imageContainerRef = React.useRef(null);

  // Scroll left handler
  const handleScrollLeft = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Scroll right handler
  const handleScrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex flex-col items-center py-16 px-4">
        <img
          // src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Technical Documentation Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0"
        />

        <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl p-10 mb-7 mt-7 flex flex-col items-start gap-4 z-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-2 tracking-tight">
            Welcome back, <span className="text-blue-600">{username}</span>
          </h1>
          <p className="text-lg text-gray-500 font-medium">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full mr-2">
              {formattedDate}
            </span>
            Hope you have a productive day!
          </p>
        </div>

        <div className="caraouselContainer w-full max-w-6xl max-h-screen rounded-3xl shadow-xl px-5 py-3 mb-7 flex flex-row gap-4 z-10 justify-center items-center bg-black">
          <button
            className="leftButton z-3 bg-gray-300 text-black rounded-full h-17 p-2 cursor-pointer hover:bg-white transition-colors"
            onClick={handleScrollLeft}
          >
            &lt;
          </button>
          <div
            className="imageContainer flex flex-row items-center gap-4 overflow-x-hidden scrollbar-hide"
            ref={imageContainerRef}
          >
            {carouselImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`carousel-${idx}`}
                className="rounded-xl shadow-md max-w-300 max-h-150 object-cover"
              />
            ))}
          </div>
          <button className="rightButton z-3 bg-gray-300 text-black rounded-full h-17 p-2 cursor-pointer hover:bg-white"
          onClick={handleScrollRight}>
            &gt;
          </button>
        </div>
        <div className="">
          <CardsGrid
            type="dashboard"
            variant="threeByThreeCards"
            gridCols={3}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
