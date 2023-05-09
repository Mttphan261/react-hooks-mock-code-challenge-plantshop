import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, addPlant, updatePlant, deletePlant}) {

  const [search,SetSearch] = useState('')

  function handleSearch(e) {
    SetSearch(e.target.value)
    console.log(e.target.value)
  }

  const filteredPlants = [...plants].filter(el => {
    return el.name.toLowerCase().includes(search.toLowerCase())
  })


  return (
    <main>
      <NewPlantForm addPlant={addPlant}/>
      <Search handleSearch={handleSearch} search={search}/>
      <PlantList deletePlant={deletePlant} filteredPlants={filteredPlants} updatePlant={updatePlant}/>
    </main>
  );
}

export default PlantPage;
