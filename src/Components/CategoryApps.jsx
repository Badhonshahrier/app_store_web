import React from "react";


const CategoryApps = ({ singleData }) => {
  return (
    <div className="category-app-card">
      <img src={singleData.thumbnail} alt={singleData.name} className="app-thumbnail" />
      <h3 className="app-name">{singleData.name}</h3>
      <p className="app-rating">⭐ {singleData.rating}</p>
      <p className="app-downloads">📥 {singleData.downloads.toLocaleString()} downloads</p>
    </div>
  );
};

export default CategoryApps;

