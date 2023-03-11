import saveNote from "@/services/save-note";

const handleChangeNoteTag = (setNotes:any, notes:any, uuid: string | "", tag: string) => {
    const updatedNote = {
      ...notes[uuid],
      updatedAt: new Date(),
      tags: [...notes[uuid].tags, tag],
    };
    setNotes((notes:any) => ({
      ...notes,
      [uuid]: updatedNote,
    }));
    saveNote(updatedNote);
  };
  
  
export default handleChangeNoteTag;