// src/AddMedicine.js
import React, { useState } from 'react';
import axios from 'axios';

const AddMedicine = () => {
    const [name, setName] = useState('');
    const [Mfg_Date, setMfg_Date] = useState('');
    const [Exp_Date, setExp_Date] = useState('');
    const [price, setPrice] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Prepare the new medicine object
        const newMedicine = { name, Mfg_Date, Exp_Date, price };

        // Make the POST request to add the new medicine
        axios.post('http://localhost:3000/addMedicine', newMedicine)
            .then((response) => {
                // On success, show a success message and clear the form
                setSuccessMessage('Medicine added successfully!');
                setErrorMessage('');  // Clear any error message
                setName('');
                setMfg_Date('');
                setExp_Date('');
                setPrice('');
            })
            .catch((error) => {
                // On failure, show an error message
                setErrorMessage('Error adding medicine. Please try again.');
                setSuccessMessage('');  // Clear any success message
            });
    };

    return (
        <div>
            <h2>Add New Medicine</h2>

            {/* Show success or error messages */}
            {successMessage && <div style={successStyle}>{successMessage}</div>}
            {errorMessage && <div style={errorStyle}>{errorMessage}</div>}

            {/* Add Medicine Form */}
            <form onSubmit={handleSubmit} style={formStyle}>
                <div style={inputStyle}>
                    <input
                        type="text"
                        placeholder="Medicine Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div style={inputStyle}>
                    <input
                        type="date"
                        placeholder="Manufacturing Date"
                        value={Mfg_Date}
                        onChange={(e) => setMfg_Date(e.target.value)}
                        required
                    />
                </div>
                <div style={inputStyle}>
                    <input
                        type="date"
                        placeholder="Expiration Date"
                        value={Exp_Date}
                        onChange={(e) => setExp_Date(e.target.value)}
                        required
                    />
                </div>
                <div style={inputStyle}>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" style={buttonStyle}>Add Medicine</button>
            </form>
        </div>
    );
};

// Simple inline styles for better UI
const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '0 auto',
};

const inputStyle = {
    margin: '10px 0',
};

const buttonStyle = {
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
};

const successStyle = {
    backgroundColor: '#d4edda',
    color: '#155724',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
};

const errorStyle = {
    backgroundColor: '#f8d7da',
    color: '#721c24',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
};

export default AddMedicine;
