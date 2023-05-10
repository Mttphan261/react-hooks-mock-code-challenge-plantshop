import React, {useState} from "react";

function PlantCard({plant}) {

  //const to toggle button
  const [inStock, setInStock] = useState(true)

  function toggleStock() {
    setInStock((prev) => !prev)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock === true ? (
        <button className="primary" onClick={toggleStock}>In Stock</button>
      ) : (
        <button onClick={toggleStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
