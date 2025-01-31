import React, { useEffect, useState } from "react";
import { getTutorials } from "../api/index";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);

  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token
        const response = await getTutorials(token);
        setTutorials(response.data);
      } catch (error) {
        console.error("Error fetching tutorials:", error);
      }
    };

    fetchTutorials();
  }, []);

  const additionalTutorials = [
    {
      title: "Cardio Workouts",
      description: "Boost your endurance with cardio exercises.",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },
    {
      title: "Strength Training",
      description: "Build muscle and strength with these exercises.",
    
      video: "https://www.youtube.com/embed/Y0nXmTZ1Ibs",
      song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
    },
    
    {
      title: "Meditation for Focus",
      description: "Meditation is a powerful practice that can help sharpen your mind, improve concentration, and cultivate inner peace. This session focuses on meditation techniques specifically designed to enhance your ability to focus and stay present. In our fast-paced world, it’s easy to feel distracted or overwhelmed, but with regular meditation, you can train your mind to quiet the noise and improve mental clarity. ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTObrLFanzWatkFp-lgoWUcB6X-de5ZL__PfQ&s",
    //   video: "https://www.youtube.com/shorts/YPtCzluQFUA?feature=share",
      song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
    },
    {
      title: "Healthy Eating Habits",
      description: " Eating nutritious, balanced meals is one of the best ways to take care of your body and mind. Healthy eating habits go beyond just eating fruits and vegetables; they involve nourishing your body with the right balance of nutrients to fuel your energy, improve your mood, and support long-term health. ",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTxbv6WYNrCVgPklr7Tdz9HlqLctICkGDAg&s",
    //   video: "https://www.youtube.com/embed/FaP38pQkbuI",
      song: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
    },
    {
        title: "Yoga for Beginners",
        description: "Starting your yoga journey is a wonderful way to improve your flexibility, strength, and mental clarity. Yoga for beginners focuses on simple yet powerful poses that help you build a solid foundation. Whether you're looking to relieve stress, enhance your focus, or improve posture, yoga offers a holistic approach to mind-body wellness.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkGL6U1xUN0DMJj6JLrY4S4zsl9KPJasXhXw&sttps://via.placeholder.com/300x200?text=Yoga+For+Beginners",
     
      },
      {
        title: "HIIT Training",
        description: "HIIT is one of the most efficient ways to boost fitness levels and burn fat in a short amount of time. This high-intensity workout alternates between short bursts of intense activity and brief periods of rest or low-intensity exercise. HIIT can be tailored to all fitness levels, and it’s perfect for those who want to improve cardiovascular health, increase strength, and challenge their endurance. ",
        image: "https://storage.googleapis.com/flex-web-media-prod/content/images/wp-content/uploads/2024/06/kettlebell-hiit-workout-cover.jpg",
     
      }
  ];

  const allTutorials = [...tutorials, ...additionalTutorials];

  return (
    <div
      style={{
        minHeight: "100vh", // Ensures the page takes at least the full viewport height
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "40px 20px",
        backgroundColor: "#f4f4f9",
      }}
    >
      <h1 style={{ color: "#4CAF50", marginBottom: "30px", textAlign: "center" }}>
        Fitness Tutorials
      </h1>
      {allTutorials.length > 0 ? (
        <div
          style={{
            overflowY: "auto", // Enable vertical scrolling
            flexGrow: 1, // Makes sure content takes up remaining space
            marginBottom: "20px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "20px",
            }}
          >
            {allTutorials.map((tutorial, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "10px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "10px" }}>
                  {tutorial.title || "Untitled Tutorial"}
                </h2>

                {/* Tutorial Image */}
                <div style={{ marginBottom: "15px", borderRadius: "10px", overflow: "hidden", width: "100%" }}>
                  <img
                    src={tutorial.image || "https://via.placeholder.com/300x200"}
                    alt={tutorial.title || "Tutorial Image"}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </div>

                {/* Tutorial Video */}
                {tutorial.video && (
                  <div style={{ marginBottom: "15px", borderRadius: "10px", overflow: "hidden" }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={tutorial.video}
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`Video: ${tutorial.title}`}
                      style={{
                        borderRadius: "8px",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                )}

                {/* Tutorial Song */}
                {tutorial.song && (
                  <div style={{ marginBottom: "15px" }}>
                    <audio controls style={{ width: "100%", borderRadius: "8px" }}>
                      <source src={tutorial.song} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Tutorial Description */}
                <p style={{ color: "#555", lineHeight: "1.6", fontSize: "1rem" }}>
                  {tutorial.description || "No description available for this tutorial."}
                </p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p style={{ color: "#888", fontSize: "1.2rem", textAlign: "center" }}>
          No tutorials available at the moment. Check back later!
        </p>
      )}
    </div>
  );
};

export default Tutorials;
