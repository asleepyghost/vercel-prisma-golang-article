import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [planetName, setPlanetName] = useState("");
  const [planetSize, setPlanetSize] = useState(0);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    axios.get("/api");
  }, []);

  async function getPlanets() {
    const response = await axios.get("/api/planet/all");
    setPlanets(response.data);
  }

  React.useEffect(() => {
    getPlanets();
  }, []);

  async function savePlanet() {
    await axios.post("/api/planet/new", {
      name: planetName,
      size: planetSize,
    });

    getPlanets();
  }

  return (
    <div className="App">
      <div>
        <label>
          Planet name:
          <input
            type="text"
            value={planetName}
            onChange={(e) => setPlanetName(e.target.value)}
          />
        </label>
        <label>
          Planet size:
          <input
            type="number"
            value={planetSize}
            onChange={(e) => setPlanetSize(e.target.value)}
          />
        </label>
        <button onClick={savePlanet}>Save</button>
      </div>
      <div>
        <h2>Planets</h2>
        {planets.map((planet) => (
          <div>
            <h3>{planet.name}</h3>
            <p>{planet.size}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
