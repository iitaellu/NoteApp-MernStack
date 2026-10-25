export function getAllNotes(req, res){
    res.status(200).send("you just fetched the notes");
};

export function CreateNote(req, res){
    res.status(201).json({message: "note created succesfully"});
};

export function updateNote(req, res){
    res.status(200).json({message: "note updated succesfully"});
};

export function deleteNote(req, res){
    res.status(200).json({message: "note deletedd succesfully"});
};