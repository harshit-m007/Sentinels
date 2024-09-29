import React, { useState } from "react";
import axios from "axios";
import "./Upload.css";

function Upload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [forgedResult, setForgedResult] = useState(null);
  
  const [file, setFile] = useState(null); // New state to hold the file

  const handleImageUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile && uploadedFile.type.startsWith("image/")) {
      const imageUrl = URL.createObjectURL(uploadedFile);
      setSelectedImage(imageUrl);
      setFile(uploadedFile); // Set the file to the state
    }
  };

  const handleButtonOnClick = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!file) {
      alert("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", file); // Append the actual file

    try {
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });

      if(response.status != 200) {
        alert("Some error occured!");
      }
      setForgedResult(response.data); // Handle the response data
    } catch (error) {
      console.log("Error occurred:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  return (
    <div className="retouching-container">
      <h1 className="retouching-heading">Upload Here</h1>
      <p className="retouching-description">
        Upload a image to detect forgeries in it.
      </p>

      {/* File input */}
      <div className="upload-area">
        <form>
          <input
            type="file"
            onChange={handleImageUpload}
            className="upload-input"
          />
          <br></br><br></br><button className="submit-button" onClick={handleButtonOnClick}>Submit</button>
        </form>
      </div>

      {/* Display the selected image */}
      {selectedImage && (
        <div className="image-preview">
          <h2 className="preview-heading">Selected Image:</h2>
          <img src={selectedImage} alt="Uploaded file preview" className="preview-image" />
        </div>
      )}

      {forgedResult && (forgedResult.isForged ? (
        <>
          {/* {console.log(forgedResult)} */}
          <div>Results</div>
          <div className="image-wrapper">
            <img src={`http://localhost:5000/images/${forgedResult.predicted_forgery_mask}`} alt="Predicted Forgery Mask" />
            <br></br><br></br>
            Predicted Forgery Mask
          </div>
          <br></br><br></br>
          <div className="image-wrapper">
            <img src={`http://localhost:5000/images/${forgedResult.suspicious_regions_detected}`} alt="Suspicious Regions Detected" />
            <br></br><br></br>
            Suspicious Regions Detected
          </div>
          <br></br><br></br>
        </>
      ) : (
        <div>The image is not forged!</div>
      ))}
    </div>
  );
}

export default Upload;
