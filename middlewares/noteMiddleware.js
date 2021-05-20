
exports.noteIdParam = (req,res,next,id) => {
    req.noteId = id;
    next();
};