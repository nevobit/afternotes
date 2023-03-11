import saveNote from "@/services/save-note";

const handleUpdateNoteTag = (setNotes:any, notes:any, uuid: string | "", tag: string, pos:any) => {
  const updatedNote = {
      ...notes[uuid],
      updatedAt: new Date(),
      tags: [...notes[uuid].tags, notes[uuid].tagas[pos]=tag],
    };
    setNotes((notes:any) => ({
      ...notes,
      [uuid]: updatedNote,
    }));
    saveNote(updatedNote);
  };
  
  
export default handleUpdateNoteTag;