const client = require("../configs/database");

exports.addNote = (req, res) => {

    const { heading, content} = req.body;

    client.query(`INSERT INTO notes (email, heading, content) values ('${req.email}', '${heading}', '${content}')`).then((data) => {
        res.status(200).json({
            message: "Note added successfully!",
        });
    }).catch((err) => {
        res.status(400).json({
            error: "Database error occured!",
        });
    });
};

exports.editNote = (req,res) => {

   const noteId = req.noteId;

    client.query(`SELECT * FROM notes where noteid = '${noteId}'`).then((data) => {

        const noteData = data.rows[0];

        res.status(200).json({
            message: "successfull!",
            data: noteData,
        });
    }).catch((err) => {
        res.status(400).json({
            error: "Database error occured!",
        });
    });
};

exports.getAllNotes = (req,res) => {
    client.query(`SELECT * FROM notes where email = '${req.email}'`).then((data) => {
        const noteData = data.rows;
        
        const filteredData = noteData.map((note) => {
            return{
                noteId: note.noteid,
                heading: note.heading,
                content: note.content,
            };
        });

        console.log(filteredData);

        res.status(200).json({
            message: "successfull!",
            data: filteredData,
        });
    }).catch((err) => {
        res.status(400).json({
            error: "Database error occured!",
        });
    });
};

exports.updateNote = (req,res) => {

    const noteId = req.noteId;
    const {heading, content} = req.body;

    client
    .query(`UPDATE notes SET heading='${heading}', content='${content}' where noteid='${noteId}'`)
    .then((data) => {
        res.status(200).json({
            message: "successfull!",
        });
    })
    .catch((err) => {
        res.status(400).json({
            error: "Database error occured!",
        });
    });
    
};

exports.deleteNote = (req,res) => {

    const noteId = req.noteId;

    client
    .query(`DELETE FROM notes where noteid='${noteId}'`)
    .then((data) => {
        res.status(200).json({
            message: "successfull!",
        });
    })
    .catch((err) => {
        res.status(400).json({
            error: "Database error occured!",
        });
    });

};