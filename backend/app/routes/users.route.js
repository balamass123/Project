const cors = require('cors');
module.exports = (app) => {
    //const notes = require('../controllers/note.controller.js');
    const users = require('../controllers/users.controller.js');

    // Create a new Note
    app.post('/users', users.create);

    app.options('/*', cors())

    // Create a new Note
    //app.post('/notes', notes.create);

    // Retrieve all Notes
    app.get('/notes', notes.findAll);

    // Retrieve a single Note with noteId
    app.get('/notes/:noteId', notes.findOne);

    // Update a Note with noteId
    app.put('/notes/:noteId', notes.update);

    // Delete a Note with noteId
    app.delete('/notes/:noteId', notes.delete);
}