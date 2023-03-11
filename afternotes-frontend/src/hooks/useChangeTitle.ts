import saveNote from "@/services/save-note";

const handleChangeNoteTitle = (setNotes:any, notes:any, uuid: string | "", title: string) => {
    const updatedNote = {
      ...notes[uuid],
      updatedAt: new Date(),
      title,
    };
    setNotes((notes:any) => ({
      ...notes,
      [uuid]: updatedNote,
    }));
    saveNote(updatedNote);
  };
  
  
export default handleChangeNoteTitle;