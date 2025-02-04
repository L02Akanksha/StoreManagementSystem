import React , {useEffect,useState} from 'react';
import axios from 'axios';

const MedicinesList = () =>{
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/getMedicines')
        .then((response) => {
            setMedicines(response.data);
        })
        .catch((error) =>{
            console.error('There was an error fetching the Medicines!',error);
        });
    },[]);

    return (
        <div>
            <h1>Medicines List</h1>
            <ul>
                {medicines.map((medicine) => (
                    <li key={medicine.id}>
                        <p>Name: {medicine.name}</p>
                        <p>Mfg Date: {medicine.Mfg_Date}</p>
                        <p>Exp Date: {medicine.Exp_Date}</p>
                        <p>Price: {medicine.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default MedicinesList;