import React from "react";
import CardsGrid from "./CardsGrid";

const MeetTheTeam = () => {
  const data = [
    {
      writers: [
        {
          name: "Vignesh Rajamohan",
          region: "Bengaluru",
          projects: ["Desigo CC"],
        },
        {
          name: "Monica Tiwari",
          region: "Bengaluru",
          projects: ["Desigo CC"],
        },
        {
          name: "Alice Phumale",
          region: "Pune",
          projects: ["System One"],
        },
        {
          name: "Yogesh Andar",
          region: "Pune",
          projects: ["Building X"],
        },
        {
          name: "Pooja Ratnaparkhi",
          region: "Pune",
          projects: ["Fire Safety"],
        },
        {
          name: "Ramkrushna Nevase",
          region: "Pune",
          projects: ["Building X"],
        },
        {
          name: "Gouranga Bhattacherjee",
          linkedIn: "https://www.linkedin.com/in/gourangabhattacherjee/",
          teams: "",
          region: "Pune",
          projects: ["Desigo CC"],
        },
        {
          name: "Vishwajeet Gunale",
          region: "Pune",
          projects: ["Desigo CC", "System Design Tool (SDT)"],
        },
        {
          name: "Yaswanth Sudhi",
          region: "Pune",
          projects: ["Edge BMS"],
        },
        {
          name: "Praful Deshmukh",
          region: "Pune",
          projects: ["NGAA", "LMS"],
        },
        {
          name: "Trupti Palwekar",
          region: "Pune",
          projects: ["Mobility"],
        },
        {
          name: "Deepali Malewadi",
          region: "Pune",
          projects: ["Siemens Energy"],
        },
        {
          name: "Padmini L",
          region: "Chennai",
          projects: ["Desigo CC"],
        },
        {
          name: "Sakhti Vel",
          region: "Chennai",
          projects: ["Building X"],
        },
        {
          name: "Nancy Delaila",
          region: "Chennai",
          projects: ["Control classic"],
        },
        {
          name: "Swetha Deepthi Ganja",
          region: "Chennai",
          projects: ["Building X"],
        },
        {
          name: "Praveen S",
          region: "Chennai",
          projects: ["Access classic"],
        },
      ],
    },
  ];

  // Group writers by region
  const regionGroups = data[0].writers.reduce((acc, writer) => {
    if (!acc[writer.region]) acc[writer.region] = [];
    acc[writer.region].push(writer);
    return acc;
  }, {});

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
      imageContainerRef.current.scrollBy({ left: -800, behavior: "smooth" });
    }
  };

  // Scroll right handler
  const handleScrollRight = () => {
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollBy({ left: 800, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex flex-col items-center py-10 md:py-20 mt-10 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-8 md:mb-12 text-gray-900 tracking-tight drop-shadow-lg px-4 text-center">
          Meet The Team
        </h2>
        {/* carousel element */}
        <div className="caraouselContainer w-full max-w-5xl max-h-screen rounded-3xl shadow-xl px-5 py-3 mb-7 flex flex-row gap-4 z-10 justify-center items-center bg-black">
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
          <button
            className="rightButton z-3 bg-gray-300 text-black rounded-full h-17 p-2 cursor-pointer hover:bg-white"
            onClick={handleScrollRight}
          >
            &gt;
          </button>
        </div>
        {/* Top-level card */}
        <div className="topLevelCard bg-white/80 rounded-3xl shadow-2xl p-10 border border-gray-200 backdrop-blur-md mb-10 w-full max-w-4xl flex flex-col items-center gap-2 relative z-20">
          <h2 className="text-xl md:text-3xl font-bold text-gray-900">
            Prachi Deshpande
          </h2>
          <p className="text-lg font-light text-gray-700">
            Senior Technical Writer at Siemens, Pune
          </p>
        </div>
        {/* writer cards */}
        <div className="flex flex-col md:flex-row gap-5 w-full max-w-[95%] md:max-w-max px-2 md:px-6 h-fit">
          {Object.entries(regionGroups).map(([region, writers]) => (
            <div
              key={region}
              className="rounded-2xl shadow-xl bg-white/80 backdrop-blur border border-gray-200 p-4 md:p-8 w-full"
            >
              <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold text-blue-700 flex items-center gap-2">
                <span className="inline-block w-2 md:w-3 h-2 md:h-3 rounded-full bg-blue-400"></span>
                {region}
              </h3>
              <div className="flex flex-col gap-3 md:gap-4">
                {writers.map((writer) => (
                  <div
                    key={writer.name}
                    className="rounded-xl bg-gradient-to-tr from-blue-50 via-white to-purple-50 border border-gray-100 shadow hover:shadow-lg transition p-4 md:p-6 flex flex-col md:flex-row justify-between items-start gap-4"
                  >
                    <div className="flex-1">
                      <strong className="text-base md:text-lg font-semibold text-gray-800 mb-2 block">
                        {writer.name}
                      </strong>
                      <div className="ml-1">
                        {writer.projects.length > 0 ? (
                          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                            {writer.projects.map((project, pIdx) => (
                              <li className="list-none" key={pIdx}>
                                {project}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-gray-400 italic">
                            No projects listed
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-row md:flex-col gap-2 w-full md:w-auto md:ml-4">
                      {writer.linkedIn && (
                        <button className="w-full md:w-auto px-4 py-2 bg-[#0077b5] text-white font-medium rounded-lg hover:bg-[#006399] transition cursor-pointer">
                          <a
                            href={writer.linkedIn}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MeetTheTeam;
