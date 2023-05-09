import React, { useState } from "react";

function NewPlantForm({addPlant}) {

  const form = {
    name: '',
    image: '',
    price: ''
  }

  const [newPlant, SetNewPlant] = useState(form);

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    SetNewPlant({
      ...newPlant,
      [e.target.name]: e.target.value
    })
  }

  const handlePOST = (e) => {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'name': newPlant.name,
        'image': newPlant.image,
        'price': newPlant.price
      })
    })
    .then((r) => r.json())
    .then((data) => {
      addPlant(data)
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePOST}>
        <input type="text" value={newPlant.name} onChange={(e) => handleChange(e)} name="name" placeholder="Plant name" />
        <input type="text" value={newPlant.image} onChange={(e) => handleChange(e)} name="image" placeholder="Image URL" />
        <input type="number" value={newPlant.price} onChange={(e) => handleChange(e)} name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
