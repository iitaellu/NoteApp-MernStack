import Note from "../models/Notes.js";

export async function getAllNotes(req, res){
    try {
        const notes = (await Note.find()).toSorted({createdAt: -1}); // -1 will sort in desc. order (newest first)
    } catch (error) {
        console.error("Error in getAllNotes controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function getNoteById(req, res){
    try {
        const noteById = await Note.findById(req.params.id);
        if(!noteById) return res.status(404).json({message: "Note not found"});
        
        res.status(200).json(noteById);
    } catch (error) {
        console.error("Error in getNoteById controller", error);
        res.status(500).json({message: "Internal server error"});
    }
}


export async function CreateNote(req, res){
    try {
        const {title, content} = req.body;
        console.log(title, content);
        const newNote = new Note({title, content});
        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (Error) {
        console.error("Error in createNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};

export async function updateNote(req, res){
    try {
        const {title, content} = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new:true});
        
        if(!updateNote) return res.status(404).json({message: "Note not found"});
        
        res.status(200).json({message: "Note updated succesfully"});
    } catch (error) {
        console.error("Error in updateNote controller", error);
        res.status(500).json(updateNote);
    }
};

export async function deleteNote(req, res){
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if(!deletedNote) return res.status(404).json({message: "Note not found"});
        
        res.status(200).json({message: "Note deleted succesfully"});
    } catch (error) {
        console.error("Error in deleteNote controller", error);
        res.status(500).json({message: "Internal server error"});
    }
};