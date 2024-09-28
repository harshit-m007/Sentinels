import React, { useState } from "react";
import "./Splicing.css";

function Splicing() {
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
    <div className="splicing-container">
      <h1 className="splicing-heading">Splicing Tool</h1>
      <p className="splicing-description">
        Upload a .jpeg image to start detecting spliced regions. This tool analyzes an image to identify areas that have been spliced together from different sources, such as combining a person from one image into another background. The AI will highlight these spliced regions to help with image forensics.
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

export default Splicing;

