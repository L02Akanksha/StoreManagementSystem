// src/App.js
import React from 'react';
import AddMedicine from './AddMedicine';
import MedicinesList from './MedicinesList';
import UpdateMedicine from './UpdateMedicine';
import DeleteMedicine from './DeleteMedicine';

function App() {
  return (
    <div className="App">
      <h1>Medicine Management System</h1>
      <AddMedicine />
      <MedicinesList />
      <UpdateMedicine />
      <DeleteMedicine />
    </div>
  );
}

export default App;
