import React, { useState } from "react";
import styles from "./Home.module.css";
import TextEditor from "@/components/Shared/TextEditor";
import { Note } from "@/types/models/notes";
import storage from "@/services/storage";
import { PASSPHRASE_STORE_KEY } from "../Signin";
import { months } from "@/utilities/months";
import loadNotes from "@/services/load-notes";
import handleCreateNewNote from "@/hooks/useNewNote";
import handleChangeNoteContent from "@/hooks/useChangeContent";
import handleChangeNoteTitle from "@/hooks/useChangeTitle";
import handleChangeNoteTag from "@/hooks/useChangeTags";
import handleUpdateNoteTag from "@/hooks/useUpdateTags";

type Props = {
  email: string;
};

const Home = ({ email }: Props) => {
  const [notes, setNotes] = useState<Record<string, Note>>(() => loadNotes());
  const [activeNoteUuid, setActiveNoteUuid] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [tag, setTag] = useState<string>("");
  

  const activeNote = activeNoteUuid ? notes[activeNoteUuid] : null;

  const handleChengeActiveNote = (uuid: string) => {
    setActiveNoteUuid(uuid);
  };
  
  console.log({activeNote})

  const noteList = Object.values(notes)
    .filter((note) => note.title.toLowerCase().includes(search?.toLowerCase()))
    .sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime());

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.user}>
          <picture>
            <img src="/avatar.png" alt="Profile avatar" />
          </picture>
          <h3>Nestor Mosquera</h3>
        </div>

        <div className={styles.field}>
          <i className="bx bx-search"></i>
          <input
            type="search"
            value={search}
            onChange={({ target }) => setSearch(target.value)}
            placeholder="Search notes..."
          />
        </div>

        <div className={styles.folders}>
          <h4>Folders</h4>
          <div className={styles.folder}>
            <h3>
              <i className="bx bx-notepad"></i> My Notes
            </h3>
            <span className={styles.dots}></span>
          </div>
          
        </div>

        <div className={styles.buttons}>
          <button>
            <i className="bx bx-plus"></i> Add new folder
          </button>
          {/* <button>
            <i className="bx bx-cog"></i> Settings
          </button> */}
          <button
            onClick={() => storage.remove(`${email}:${PASSPHRASE_STORE_KEY}`)}
          >
            <i className="bx bx-exit"></i> Logout
          </button>
        </div>
      </div>
      <div className={styles.notes}>
        <h2>My Notes</h2>
        <button className={styles.add} onClick={() => handleCreateNewNote(setNotes, setActiveNoteUuid)}>
          <i className="bx bx-plus"></i> Add new note
        </button>
        <div>
          {noteList.map(({ uuid, title, updatedAt }) => (
            <div
              className={`${styles.note} ${
                uuid == activeNote?.uuid ? styles.selected : ""
              }`}
              key={uuid}
              onClick={() => handleChengeActiveNote(uuid)}
            >
              <span>
                {updatedAt.getDay()} {months[updatedAt.getMonth()]}
              </span>
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.editor}>
        <div className={styles.header}>
          <h2>My Notes / {activeNote?.title}</h2>
        </div>
        <input
          value={activeNote?.title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChangeNoteTitle(setNotes, notes, activeNote?.uuid || "", e.target.value)
          }
        />

        <div className={styles.details}>
          <div>
            <span>Created by</span> <p>Floyd Lawton</p>
          </div>
          <div>
            <span>Last Modified</span>{" "}
            <p>
              {activeNote?.updatedAt.getDay()}{" "}
              {months[activeNote?.updatedAt.getMonth() || 0]}{" "}
              {activeNote?.updatedAt.getFullYear()}
              {", "}
              {activeNote?.updatedAt.getHours()}:
              {activeNote?.updatedAt.getMinutes()}:
              {activeNote?.updatedAt.getSeconds()}
              {activeNote?.updatedAt.getHours() || 0 > 12 ? " PM" : "AM"}
            </p>
          </div>
          <div>
            <span>Tags</span>{" "}
            <p style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}>
              
              {activeNote?.tags.map((tag, index) => (
                  <input className={styles.tag}  defaultValue={tag} onChange={(e) => handleUpdateNoteTag(setNotes, notes, activeNote?.uuid || "", e.target.value, index)}  />
              ))}
            
              <button className={styles.add_tag} onClick={() => handleChangeNoteTag(setNotes, notes, activeNote?.uuid || "", tag)}>
                <i className="bx bx-plus"></i> Add new tag
              </button>
            </p>
          </div>
        </div>
        <TextEditor
          value={activeNote?.content}
          setValue={(content: any) =>
            handleChangeNoteContent(setNotes, notes, activeNote?.uuid || "", content)
          }
        />
      </div>
    </div>
  );
};

export default Home;
