import React from 'react';
import GalleryItem from './GalleryItem';

const GalleryContent = ({ filteredItems, filterType, setFilterType, filterDate, setFilterDate }) => (
  <div>
    {/* Banner Section */}
    <div className="py-40 text-center text-white px-4"
         style={{
           backgroundImage: 'url(/event.png)', // Replace with your image path
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">School Events and Activities</h2>
    </div>

    <div className="gallery-container max-w-7xl mx-auto px-4 py-8">
      {/* Filter options */}
      <div className="filters mb-8 flex flex-col md:flex-row md:justify-center md:items-center gap-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All</option>
          <option value="event">Events</option>
          <option value="activity">Activities</option>
        </select>
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          className="p-2 border rounded"
        />
      </div>

      {/* Gallery items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <GalleryItem key={item.id} item={item} />
          ))
        ) : (
          <p>No items to display</p>
        )}
      </div>
    </div>
  </div>
);

export default GalleryContent;
