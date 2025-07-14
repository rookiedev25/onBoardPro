import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen text-white"
        style={{
          background:
            "linear-gradient(to top,rgb(29, 113, 62) 0%,rgb(0, 0, 0) 50%)",
          height: "100vh",
          marginTop: "-4rem",
        }}
      >
        <h1
          style={{
            marginBottom: "1rem",
            fontSize: "2.5rem",
            fontWeight: "800",
            textAlign: "center",
            lineHeight: "1",
            letterSpacing: "-0.025rem",
            maxWidth: "900px",
            padding: "0 1rem",
            color: "#fff",
          }}
        >
          Empowering TechWriters to learn and connect with a supportive
          community
        </h1>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.125rem",
            fontWeight: "400",
            color: "#ccc",
            textAlign: "center",
            lineHeight: "1.75rem",
            maxWidth: "600px",
          }}
        >
          Discover a supportive environment where your growth as a Technical
          Writer is our priority
        </p>
        <button
          style={{
            backgroundColor: "oklch(62.7% 0.194 149.214)",
            borderRadius: "10px",
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            padding: "0.625rem 2.5rem",
            fontSize: "1.15rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
        >
          Get Started
        </button>
      </div>
    </>
  );
};
export default Home;
