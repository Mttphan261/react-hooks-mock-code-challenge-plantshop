import React, {useState} from "react";



function PlantCard({plant,updatePlant, deletePlant}) {

  const [price,setPrice] = useState(plant.price)
  let [inStock, setInStock] = useState(true)

  function handleStock() {
    setInStock(prev => !prev)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }
  //PATCH
  function handleSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, { 
    method: "PATCH",
    body: JSON.stringify({price: parseInt(price)}),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then((r) => r.json())
    .then((data) => updatePlant(data))
  }

  //DELETE
  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`,{
    method: 'DELETE',})
    .then((r) => r.json())
    .then(data => deletePlant(data))
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock === true ? (
        <button className="primary" onClick={handleStock}>In Stock</button>
      ) : (
        <button onClick={handleStock}>Out of Stock</button>
      )}
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => handlePrice(e)} type="number" step="1.00" name="price" placeholder={price}></input>
        <input type="submit" value="Submit"></input>
      </form>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
}

export default PlantCard;
