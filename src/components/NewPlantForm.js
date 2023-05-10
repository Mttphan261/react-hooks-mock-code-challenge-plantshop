import React, { useState } from "react";

function NewPlantForm({addPlant}) {
  const initialForm = {
    name: "",
    image: "",
    price: "",
  };

  const [form, setForm] = useState(initialForm);

  function handlePOST(e) {
    e.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        image: form.image,
        price: form.price,
      }),
    })
      .then((r) => r.json())
      .then((data) => addPlant(data));
  }

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePOST}>
        <input type="text" onChange={(e) => handleChange(e)} name="name" placeholder="Plant name" />
        <input type="text" onChange={(e) => handleChange(e)} name="image" placeholder="Image URL" />
        <input type="number" onChange={(e) => handleChange(e)} name="price" step="1.99" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
