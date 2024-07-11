import React, { useState } from "react";

function PlayForm({ addPlay }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    openDate: "",
    performanceCount: "",
    theater: "",
    director: "",
    description: "",
    types: "current"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlay(formData);
    setFormData({
      name: "",
      image: "",
      openDate: "",
      performanceCount: "",
      theater: "",
      director: "",
      description: "",
      types: "current"
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Play name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
      />
      <input
        type="text"
        name="openDate"
        placeholder="Open Date"
        value={formData.openDate}
        onChange={handleChange}
      />
      <input
        type="number"
        name="performanceCount"
        placeholder="Performance Count"
        value={formData.performanceCount}
        onChange={handleChange}
      />
      <input
        type="text"
        name="theater"
        placeholder="Theater"
        value={formData.theater}
        onChange={handleChange}
      />
      <input
        type="text"
        name="director"
        placeholder="Director"
        value={formData.director}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      <select name="types" value={formData.types} onChange={handleChange}>
        <option value="current">Current</option>
        <option value="upcoming">Upcoming</option>
      </select>
      <button type="submit">Add Play</button>
    </form>
  );
}

export default PlayForm;
