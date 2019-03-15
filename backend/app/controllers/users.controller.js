const Users = require('../models/users.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
        // Validate request
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
    
        // Create a Note
        const users = new Users({
            name: req.body.name || "Untitled Note", 
            email: req.body.email,
            gender:req.body.gender,
            age:req.body.age,
            mobileno:req.body.mobileno,
            password:req.body.password,
        });

        console.log(users);
    
        // Save Note in the database
        users.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };
    exports.findAll = (req, res) => {
        Users.find()
        .then(users => {
            res.send(users);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };
    