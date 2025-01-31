import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div style={{ backgroundColor: "#F8FAFC", minHeight: "100vh", display: "flex", flexDirection: "column", overflowY: "auto" }}>
      {/* Main Contact Form */}
      <div style={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "2rem" }}>
        <div
          style={{
            width: "100%",
            maxWidth: "600px",
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #D1D5DB",
            transition: "box-shadow 0.3s ease-in-out",
          }}
          onMouseOver={(e) => (e.target.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)")}
          onMouseOut={(e) => (e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)")}
        >
          <h1 style={{ textAlign: "center", fontSize: "2rem", color: "#4B5563", fontWeight: "600", marginBottom: "1.5rem" }}>
            Contact Us
          </h1>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="name" style={{ display: "block", color: "#4B5563", fontSize: "1rem", marginBottom: "0.5rem" }}>
                Full Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3B82F6";
                  e.target.style.boxShadow = "0 0 5px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#D1D5DB";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="email" style={{ display: "block", color: "#4B5563", fontSize: "1rem", marginBottom: "0.5rem" }}>
                Email Address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  outline: "none",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3B82F6";
                  e.target.style.boxShadow = "0 0 5px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#D1D5DB";
                  e.target.style.boxShadow = "none";
                }}
              />
            </div>

            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="message" style={{ display: "block", color: "#4B5563", fontSize: "1rem", marginBottom: "0.5rem" }}>
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "0.75rem",
                  border: "1px solid #D1D5DB",
                  borderRadius: "8px",
                  outline: "none",
                  minHeight: "150px",
                  resize: "none",
                  fontSize: "1rem",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  boxSizing: "border-box",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "#3B82F6";
                  e.target.style.boxShadow = "0 0 5px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "#D1D5DB";
                  e.target.style.boxShadow = "none";
                }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#2563EB",
                color: "white",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                fontSize: "1.125rem",
                transition: "background-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = "#1D4ED8";
                e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = "#2563EB";
                e.target.style.boxShadow = "none";
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#D9EAFD",
          color: "#4B5563",
          textAlign: "center",
          padding: "1rem",
          marginTop: "2rem",
        }}
      >
        <p style={{ fontSize: "1rem" }}>Contact Details:</p>
        <p style={{ fontSize: "1rem" }}>
          Phone: <span style={{ fontWeight: "600" }}>+977-9866124629</span> | Email:{" "}
          <a href="mailto:shivgupta@gmail.com" style={{ color: "#2563EB", textDecoration: "none" }}>
            shivgupta@gmail.com
          </a>
        </p>
        <p style={{ fontSize: "1rem" }}>
          Website:{" "}
          <a href="https://yoursite.com" style={{ color: "#2563EB", textDecoration: "none" }}>
            FitnessTrack.com
          </a>
        </p>
        <p style={{ fontSize: "0.75rem", marginTop: "1rem" }}>
          &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
