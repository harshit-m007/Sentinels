import React, { useState } from "react";
import "./Retouching.css";

function Retouching() {
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
    <div className="retouching-container">
      <h1 className="retouching-heading">Retouching Tool</h1>
      <p className="retouching-description">
        Upload a .jpeg image to start retouching and enhancing your image.
        This tool applies subtle edits to enhance or alter specific features without overt manipulation, such as text editing or major changes. The AI recognizes and highlights subtle modifications like noise reduction, brightness, or contrast adjustments, giving your images a professional and polished look.
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

export default Retouching;

