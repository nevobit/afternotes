import saveNote from "@/services/save-note";

const handleChangeNoteContent = (setNotes: any, notes:any, uuid: string | "", content: string) => {
    const updatedNote = {
      ...notes[uuid],
      updatedAt: new Date(),
      content,
    };
    setNotes((notes:any) => ({
      ...notes,
      [uuid]: updatedNote,
    }));
    saveNote(updatedNote);
  };

export default handleChangeNoteContent;