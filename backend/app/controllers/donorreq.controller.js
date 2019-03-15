const Donorreq = require('../models/donorreq.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
        // Validate request
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
    
        // Create a Note
        const donorreq = new Donorreq({
            name: req.body.name || "Untitled Note", 
            email: req.body.email,
            gender:req.body.gender,
            age:req.body.age,
            mobileno:req.body.mobileno,
            bloodgroup:req.body.bloodgroup,
            location:req.body.location
        });

    
        // Save Note in the database
        donorreq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };

    exports.findAll = (req, res) => {
        Donorreq.find()
        .then(donorreq => {
            res.send(donorreq);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };
    exports.search = (req, res) => {
        console.log(req.params);
        Donorreq.find({bloodgroup:req.params.bloodGroup, location:req.params.location})
        .then(donorreq => {
            if(!donorreq) {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.location
                });            
            }
            res.send(donorreq);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Note not found with id " + req.params.location
                });                
            }
            return res.status(500).send({
                message: "Error retrieving note with id " + req.params.location
            });
        });
    };
    