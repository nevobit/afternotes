import { Note } from "@/types/models/notes";
import storage, { STORAGE_KEY } from "@/services/storage";


const loadNotes = () => {
    const noteUuids = storage.get<string[]>(STORAGE_KEY, []);
    const notes: Record<string, Note> = {};
    noteUuids.forEach((uuid) => {
      const note = storage.get<Note>(`${STORAGE_KEY}:${uuid}`);
      notes[note.uuid] = {
        ...note,
        updatedAt: new Date(note.updatedAt),
      };
    });
    return notes;
  };
  
  
export default loadNotes;