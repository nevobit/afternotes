import { Note } from "@/types/models/notes";
import debounce from "@/utilities/debounce";
import storage, { STORAGE_KEY } from "@/services/storage";

const saveNote = debounce((note: Note) => {
    const noteUuids = storage.get<string[]>(STORAGE_KEY, []);
    const noteUuidsWithoutNote = noteUuids.filter((uuid) => uuid !== note.uuid);
    storage.set(STORAGE_KEY, [...noteUuidsWithoutNote, note.uuid]);
    storage.set(`${STORAGE_KEY}:${note.uuid}`, note);
}, 1000);

export default saveNote;