import express from "express";
import {CreateNote, deleteNote, getAllNotes, updateNote} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

router.post("/", CreateNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;