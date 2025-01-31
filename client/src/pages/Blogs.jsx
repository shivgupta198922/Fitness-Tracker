import React, { useEffect, useState } from 'react';
import { getBlogs } from '../api';  // Ensure this matches the export from index.js

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        console.log("Token from localStorage:", token);  // Check if token is retrieved correctly
        const response = await getBlogs(token);
        setBlogs(response.data);  // Assuming the API returns data in `response.data`
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError("There was an issue fetching the blogs.");
      }
    };

    fetchBlogs();
  }, []);

  const blogContainerStyle = {
    padding: "20px",
    backgroundColor: "#f4f7f6",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "900px",
    margin: "auto",
    marginTop: "30px",
  };

  const headingStyle = {
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    color: "#2c3e50",
    marginBottom: "20px",
    fontSize: "36px",
    fontWeight: "bold",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const listItemStyle = {
    backgroundColor: "#ffffff",
    marginBottom: "15px",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s",
  };

  const hoverStyle = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const yogaIconStyle = {
    fontSize: "30px",
    color: "#8e44ad",
    marginRight: "10px",
  };

  const fitnessIconStyle = {
    fontSize: "30px",
    color: "#e67e22",
    marginRight: "10px",
  };

  const meditationIconStyle = {
    fontSize: "30px",
    color: "#27ae60",
    marginRight: "10px",
  };

  return (
    <div style={blogContainerStyle}>
      <h1 style={headingStyle}>Fitness, Yoga, and Meditation Blogs</h1>
      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
      <ul style={listStyle}>
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <li
              key={index}
              style={listItemStyle}
              onMouseEnter={(e) => (e.currentTarget.style = { ...listItemStyle, ...hoverStyle })}
              onMouseLeave={(e) => (e.currentTarget.style = listItemStyle)}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {blog.category === "Yoga" && <span style={yogaIconStyle}>🧘‍♀️</span>}
                {blog.category === "Fitness" && <span style={fitnessIconStyle}>💪</span>}
                {blog.category === "Meditation" && <span style={meditationIconStyle}>🧘‍♂️</span>}
                <h3 style={{ fontFamily: "'Open Sans', sans-serif", color: "#34495e" }}>{blog.title}</h3>
              </div>
              <p style={{ fontFamily: "'Open Sans', sans-serif", color: "#7f8c8d", fontSize: "16px" }}>
                {blog.category === "Yoga" && (
                  <span>
                    Yoga is not just a physical exercise, it's a journey to mental peace and balance.
                    In this blog, we will explore simple yoga poses to improve flexibility and reduce stress.
                  </span>
                )}
                {blog.category === "Fitness" && (
                  <span>
                    Fitness is the foundation of a healthy life. Join us as we dive into workouts, fitness challenges, and tips
                    to keep your body strong and energetic. Stay fit, stay healthy!
                  </span>
                )}
                {blog.category === "Meditation" && (
                  <span>
                    Meditation helps clear the mind and find inner peace. Discover techniques to calm your thoughts,
                    practice mindfulness, and bring balance to your daily routine.
                  </span>
                )}
              </p>
              <a
                href={`/blogs/${blog.id}`}
                style={{
                  color: "#2980b9",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  marginTop: "10px",
                  display: "inline-block",
                }}
              >
                Read More &rarr;
              </a>
            </li>
          ))
        ) : (
          <p style={{ textAlign: "center", color: "#7f8c8d" }}>No blogs available. Check back later for new articles on fitness, yoga, and meditation!</p>
        )}
      </ul>
    </div>
  );
};

export default Blogs;
