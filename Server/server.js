const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

//Middleware
app.use(bodyParser.json());

//MySQL Database Connection
const db = mysql.createConnection({
    host:'localhost',
    user:'root', 
    password:'neelu',
    database:'mydb'
});

//Connect to Mysql
db.connect(err => {
    if(err){
        console.error('Database connection error:',err.stack);
        return;
    }
    console.log('Connected to MYSQL as id' + db.threadId);
});


//Routes for CRUD Operations

//create :Add a new Medicine
app.post('/addMedicine',(req,res) =>{
    const{name,Mfg_Date,Exp_Date,price} = req.body;
    const query = 'Insert into Medicines ( name , Mfg_Date , Exp_Date, price) values (?,?,?,?)';

    db.execute(query ,[name,Mfg_Date , Exp_Date, price],(err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error creating user', error: err.message});
        }

        res.status(201).json({message: 'medicine entered successfully',userId: result.insertId});
    });
});

//Read:Get all Medicines
app.get('/getMedicines',(req,res) =>{
    const query = 'Select * from Medicines';

    db.execute(query , (err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error fetching users',error: err.message});
        }
        res.status(200).json(result);
    });
    
});

app.get('/Medicines/:id',(req,res) =>{
    const {id} = req.params;
    const query = 'Select * from Medicines where id = ?';

    db.execute(query , [id] , (err,result) =>{
        if(err){
            return res.status(500).json({message: 'Medicine not found'});
        }
        res.status(200).json(result[0]);
    });
});

//Update Medicines information
app.put('/updateMedicines/:id',(req,res) =>{
    const{id} = req.params;
    const {name,Mfg_Date,Exp_Date,price} = req.body;
    const query = 'Update Medicines set name = ?,Mfg_Date = ?,Exp_Date = ?,price = ? where id = ?';

    db.execute(query ,[name,Mfg_Date,Exp_Date,price] , (err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error updating Medicine', error: err.message});
        }
        if(result.affectedRows === 0){
            return res.status(404).json({message:"Medicine Not Found"});
        }
        
        res.status(200).json({message: "Medicine updated Successfully"});
    });
    
});

app.delete('/Medicines/:id',(req,res) =>{
    const{id} = req.params;
    const query = 'Delete from Medicines where id = ?';

    db.execute(query ,[id],(err,result) =>{
        if(err){
            return res.status(500).json({message: 'Error deleting user',error:err.message});
        }
        if(result.affectedRows === 0){
            return res.status(404).json({message:'Medicine not Found'});
        }
        res.status(200).json({message:'User deleted successfully'});
    });
});

app.listen(PORT,() =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});