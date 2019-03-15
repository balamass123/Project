const Bloodreq = require('../models/bloodreq.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
        // Validate request
        if(!req.body.name) {
            return res.status(400).send({
                message: "Name can not be empty"
            });
        }
    
        // Create a Note
        const bloodreq = new Bloodreq({
            name: req.body.name || "Untitled Note", 
            email: req.body.email,
            gender:req.body.gender,
            age:req.body.age,
            mobileno:req.body.mobileno,
            bloodgroup:req.body.bloodgroup,
            location:req.body.location,
            date:req.body.date,
        });

        console.log(bloodreq);
    
        // Save Note in the database
        bloodreq.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
    };
    exports.findAll = (req, res) => {
        Bloodreq.find()
        .then(bloodreq => {
            res.send(bloodreq);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
    };