import React, { useState, useEffect, useCallback } from "react";
import PlayList from "./PlayList";
import Search from "./Search";

function UpcomingPlays() {
  const [plays, setPlays] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPlays = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:6001/plays");
      const data = await response.json();
      setPlays(data.filter(play => play.types === "upcoming"));
    } catch (error) {
      console.error("Error fetching plays:", error);
    }
  }, []);

  useEffect(() => {
    fetchPlays();
  }, [fetchPlays]);

  const filteredPlays = plays.filter(play => 
    play.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <Search setSearchTerm={setSearchTerm} />
      <PlayList plays={filteredPlays} setPlays={setPlays} />
    </main>
  );
}

export default UpcomingPlays;
