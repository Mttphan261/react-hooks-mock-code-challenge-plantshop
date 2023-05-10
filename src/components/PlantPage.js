import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantArray, setPlantArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => setPlantArray(data));
  }, []);

  //add plant CB for POST
  function addPlant(plant) {
    setPlantArray([...plantArray, plant]);
  }

  //SEARCH
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  const searchedPlants = [...plantArray].filter((el) => {
    return el.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search search={search} handleSearch={handleSearch}/>
      <PlantList plantArray={searchedPlants} />
    </main>
  );
}

export default PlantPage;
