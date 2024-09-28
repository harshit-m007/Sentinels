import React from "react"
import { Link } from "react-router-dom"
import "./Landingpage.css" // Import the CSS file
// import Aeroearth from "./images/Aeroearth.jpg" // Import the image

function LandingPage() {
  return (
    <div className="landing-container">
      <div className="left-content">
        <h1 className="heading">Sen-forge</h1>
        <h2>Welcome to Sen-forge: Your Aviation Safety Companion</h2>
        <p>AeroScan is a cutting-edge platform for detecting airplane damages and faulty wiring, ensuring aviation safety. With advanced image analysis and AI-driven technology, we provide accurate inspections for maintenance professionals and enthusiasts alike. Join us in revolutionizing aviation safety with our comprehensive inspection solutions.</p>
        <ul>
          <li className="btn-1">
            <Link to="/retouching" className="button">
              Retouching
            </Link>
          </li>
          <li className="btn-2">
            <Link to="/splicing" className="button">
              Splicing
            </Link>
          </li>
          <li className="btn-2">
            <Link to="/copy-move" className="button">
              Copy-move
            </Link>
          </li>
        </ul>
      </div>
      <div className="right-content">
        {" "}
      </div>
    </div>
  )
}

export default LandingPage
