import React, { useState } from "react";

// SearchBar Component
function SearchBar({ onSearch }) {
  return (
    <input
      type="text"
      placeholder="Search for destinations"
      onChange={(e) => onSearch(e.target.value)}
      style={{ padding: "10px", width: "300px" }}
    />
  );
}

// Card Component
function Card({ title, description }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// Main Search Page Component
export default function SearchPage() {
  const [query, setQuery] = useState("");

  // Sample destination data
  const destinations = [
    { name: "Paris", description: "The city of light" },
    { name: "New York", description: "The Big Apple" },
    { name: "Tokyo", description: "The heart of Japan" },
  ];

  // Filter destinations based on the search query
  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Search Destinations</h1>
      <SearchBar onSearch={setQuery} />
      <div>
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((destination) => (
            <Card
              key={destination.name}
              title={destination.name}
              description={destination.description}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}
