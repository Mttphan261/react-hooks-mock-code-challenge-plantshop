import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantArray }) {
  const mappedPlants = [...plantArray].map((el) => {
    return <PlantCard key={el.id} plant={el} />;
  });

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {mappedPlants} */
    </ul>
  );
}

export default PlantList;
