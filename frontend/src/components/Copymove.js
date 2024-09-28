import React, { useState } from "react";
import "./Copymove.css";

function Copymove() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file input change event
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "image/jpeg") {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    } else {
      alert("Please upload a valid .jpeg file.");
    }
  };

  return (
    <div className="copymove-container">
      <h1 className="copymove-heading">Copy-Move Forgery Detection Tool</h1>
      <p className="copymove-description">
        Upload a .jpeg image to detect copy-move forgery. This tool helps you find areas in an image where part of the content, such as a car, has been copied and pasted within the same image. The AI will highlight these duplicate regions for closer inspection.
      </p>

      {/* File input */}
      <div className="upload-area">
        <input
          type="file"
          accept=".jpeg"
          onChange={handleImageUpload}
          className="upload-input"
        />
      </div>

      {/* Display the selected image */}
      {selectedImage && (
        <div className="image-preview">
          <h2 className="preview-heading">Selected Image:</h2>
          <img src={selectedImage} alt="Uploaded file preview" className="preview-image" />
        </div>
      )}
    </div>
  );
}

export default Copymove;

