// src/UpdateMedicine.js
import React, { useState } from 'react';
import axios from 'axios';

const UpdateMedicine = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [Mfg_Date, setMfg_Date] = useState('');
    const [Exp_Date, setExp_Date] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const updatedMedicine = { name, Mfg_Date, Exp_Date, price };

        axios.put(`http://localhost:3000/updateMedicines/${id}`, updatedMedicine)
            .then((response) => {
                alert('Medicine updated successfully!');
                setId('');
                setName('');
                setMfg_Date('');
                setExp_Date('');
                setPrice('');
            })
            .catch((error) => {
                console.error('There was an error updating the medicine!', error);
            });
    };

    return (
        <div>
            <h2>Update Medicine</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="number"
                        placeholder="Medicine ID"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Medicine Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        placeholder="Manufacturing Date"
                        value={Mfg_Date}
                        onChange={(e) => setMfg_Date(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="date"
                        placeholder="Expiration Date"
                        value={Exp_Date}
                        onChange={(e) => setExp_Date(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <button type="submit">Update Medicine</button>
            </form>
        </div>
    );
};

export default UpdateMedicine;
