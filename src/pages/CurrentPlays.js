import React, { useState, useEffect, useCallback } from "react";
import NewPlayForm from "./NewPlayForm";
import PlayList from "./PlayList";
import Search from "./Search";

function CurrentPlays() {
  const [plays, setPlays] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchPlays = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:6001/plays");
      const data = await response.json();
      setPlays(data.filter(play => play.types === "current"));
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
      <NewPlayForm setPlays={setPlays} />
      <Search setSearchTerm={setSearchTerm} />
      <PlayList plays={filteredPlays} setPlays={setPlays} />
    </main>
  );
}

export default CurrentPlays;
