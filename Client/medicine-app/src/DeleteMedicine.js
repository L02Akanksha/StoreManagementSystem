// src/DeleteMedicine.js
import React, { useState } from 'react';
import axios from 'axios';

const DeleteMedicine = () => {
    const [id, setId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:3000/Medicines/${id}`)
            .then((response) => {
                alert('Medicine deleted successfully!');
                setId('');
            })
            .catch((error) => {
                console.error('There was an error deleting the medicine!', error);
            });
    };

    return (
        <div>
            <h2>Delete Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        placeholder="Medicine ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <button type="submit">Delete Medicine</button>
            </form>
        </div>
    );
};

export default DeleteMedicine;
