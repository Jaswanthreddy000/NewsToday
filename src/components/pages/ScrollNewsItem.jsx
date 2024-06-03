import React from 'react';

// Define the ScrollNewsItem component
export default function ScrollNewsItem({ title }) {
  return (
    <div>
      {/* Display the title within a span element */}
      <span className="card-title">{title}</span>
    </div>
  );
}
