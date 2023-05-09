import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ filteredPlants, updatedPlant, updatePlant, deletePlant }) {
  const mappedPlants = filteredPlants.map((plant) => {
    return (
      <PlantCard
        key={plant.id}
        deletePlant={deletePlant}
        updatedPlant={updatedPlant}
        plant={plant}
        updatePlant={updatePlant}
      />
    );
  });

  return <ul className="cards">{mappedPlants}</ul>;
}

export default PlantList;
