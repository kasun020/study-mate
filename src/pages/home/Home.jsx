// ./pages/home/Home.js
import React from "react";
import "./home.css";

// Correct the import statement to include the .png extension
import Background from "../../assets/images/HomePageIcons/bg_img_math.png";
import HeroImage from "../../assets/images/HomePageIcons/hero_img.gif";
import Logo from "../../assets/images/HomePageIcons/logo.png";
import Timer from "../../assets/images/HomePageIcons/timer.gif";

function Home() {
  return (
    <div className="container">
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <button className="set-plan">
          <img src={Timer} alt="" className="timer" />
          Set Your Study Plan
        </button>
        <div className="nav">
          <nav>Home</nav>
          <nav>Downloads</nav>
          <nav>Features</nav>
        </div>
      </div>
      <main className="main-content">
        <div className="content">
          <div className="hero">
            <h1 className="upper-hero">
              <span className="black-text">Your</span>
              <span className="white-text">Smart Learning</span>
            </h1>
            <h1>
              <span className="black-text-large">Companion</span>
            </h1>
            <div className="description">
              <p className="welcome-text">Welcome to StudyMate!</p>
              <br />
              <p className="welcome-description">
                Take control of your study time with our innovative app. Harness
                the power of the Pomodoro technique to stay focused, track your
                progress, and keep your spirits high with motivating rewards and
                inspiring quotes. Join us for a smarter, more engaging way to
                study and achieve your academic goals!
              </p>
            </div>
            <br />
            <br />
            <div className="btn">
              <button className="log-in-btn">Log In</button>
              <button className="started-free-btn">Get Started Free</button>
            </div>
            <img src={HeroImage} alt="" className="hero-img" />
          </div>
          <img src={Background} alt="" className="background-img" />
        </div>
      </main>
    </div>
  );
}

export default Home;
