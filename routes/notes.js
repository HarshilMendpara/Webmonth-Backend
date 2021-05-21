const express = require("express");
const { addNote, getAllNotes, updateNote, deleteNote, editNote } = require("../controllers/notes");
const { verifyToken } = require("../middlewares/authMiddleware");
const { noteIdParam } = require("../middlewares/noteMiddleware");
const router = express.Router();

router.param("noteId", noteIdParam);

router.post("/add", verifyToken, addNote);
router.get("/getallnotes", verifyToken, getAllNotes);
router.put("/update/:noteId", verifyToken, updateNote);
router.get("/edit/:noteId", verifyToken, editNote);
router.delete("/delete/:noteId", verifyToken, deleteNote);

module.exports = router;
