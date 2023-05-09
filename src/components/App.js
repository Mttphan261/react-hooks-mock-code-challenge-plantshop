import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

// //When the app starts, I can see all plants.
// I can add a new plant to the page by submitting the form.
// I can mark a plant as "sold out".
// I can search for plants by their name and see a filtered list of plants.

function App() {
  const [plants, setPlants] = useState([]);

  const addPlant = (plant) => {
    setPlants([...plants, plant]);
  };

  function updatePlant(plant) {
    setPlants(
      [...plants].map((el) => {
        return el.id === plant.id ? plant : el;
      })
    );
  }

  function deletePlant(id) {
    setPlants(
      [...plants].filter((curPlant) => {
        if (curPlant.id === id) {
          return false;
        } else {
          return true
        }
      })
    );
  }

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlants(data));
  }, []);

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        addPlant={addPlant}
        updatePlant={updatePlant}
        deletePlant={deletePlant}
      />
    </div>
  );
}

export default App;
