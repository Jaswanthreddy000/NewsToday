import React from 'react';
import "./news.css";
import dfimag from "../../images/defaultimage.png";
import defaultTechnology from "../../images/defaultTechnology.png";
import defaultBusiness from "../../images/defaultBusiness.png";
import defaultHealth from "../../images/defaultHealth.png";
import defaultSports from "../../images/defaultSports.png";
import defaultEntertainment from "../../images/defaultEntertainment.png";

// Object to map category to default images
const categoryImages = {
  technology: defaultTechnology,
  business: defaultBusiness,
  health: defaultHealth,
  sports: defaultSports,
  entertainment: defaultEntertainment,
};

// NewsItem component definition
export default function NewsItem({ title, description, src, url, category, name, publishedAt }) {
  // Select the default image based on the category or use a generic default image
  const defaultImage = categoryImages[category] || dfimag;
  
  // Format the publication date to be more readable
  const formattedDate = new Date(publishedAt).toLocaleString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
    timeZone: 'Asia/Kolkata'
  });

  // Render the NewsItem component
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px", maxHeight: "500px" }}>
      {/* Image container with the news image and formatted date */}
      <div className='image-container'>
        <img 
          src={src ? src : defaultImage} 
          alt="photo" 
          style={{ maxHeight: "200px", height: "200px", width: "330px" }} 
          className="card-img-top" 
        />
        {/* Display the formatted date on the image */}
        <div className="card-date">{formattedDate}</div>
      </div>
      
      {/* Display the source of the news */}
      <div className="card-source" style={{ width: "330px" }}>
        Source: {name}
      </div>
      
      {/* Body of the card containing the title and description */}
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 43)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 65) + "..." : "Stay updated with the latest headlines and dive into today's top stories."}
        </p>
        {/* Link to read more about the news */}
        <a href={url} className="btn btn-secondary">Read More</a>
      </div>
    </div>
  );
}
