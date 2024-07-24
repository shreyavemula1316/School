import React from 'react';

const GalleryItem = ({ item }) => (
  <div className="gallery-item bg-white rounded-lg shadow-md overflow-hidden">
    <h3 className="text-xl font-semibold p-4">{item.title}</h3>
    <div className="media-container">
      {item.mediaType === 'photo' ? (
        <img src={item.url} alt={item.title} className="w-full h-auto" />
      ) : (
        <video controls className="w-full h-auto">
          <source src={item.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
    <p className="text-gray-600 p-4">{new Date(item.date).toLocaleDateString()}</p>
  </div>
);

export default GalleryItem;
