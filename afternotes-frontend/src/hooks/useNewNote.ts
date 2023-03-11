import saveNote from "@/services/save-note";
import { v4 as UUID } from "uuid";

const handleCreateNewNote = (setNotes: any, setActiveNoteUuid:any) => {

  const newNote = {
    uuid: UUID(),
    title: "New note",
    content: "<h1>New note</h1>",
    tags: [],
    updatedAt: new Date(),
  };

  setNotes((notes:any) => ({
    ...notes,
    [newNote.uuid]: newNote,
  }));

  setActiveNoteUuid(newNote.uuid);
  saveNote(newNote);
  
};

export default handleCreateNewNote;
