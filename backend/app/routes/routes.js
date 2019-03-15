const cors = require("cors");
module.exports = (app) => {
    const notes = require('../controllers/note.controller.js');
    const users = require('../controllers/users.controller.js');
    const donorreq = require('../controllers/donorreq.controller.js');
    const bloodreq = require('../controllers/bloodreq.controller.js');
    
    app.options("/*",  cors());
    // Create a new Note
    app.post('/notes', notes.create);
    app.post('/users', users.create);
    app.post('/donorreq', donorreq.create);
    app.post('/bloodreq', bloodreq.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);
    app.get('/users', users.findAll);
    app.get('/bloodreq', bloodreq.findAll);
    app.get('/donorreq', donorreq.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);
    app.get('/donorreq/:bloodGroup/:location',donorreq.search);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}