import React from "react";
import quill from "quill";
import "quill/dist/quill.snow.css";
import styles from "./TextEditor.module.css";
import ReactQuill from "react-quill";

interface Props {
  className?: string;
  value?: string;
  setValue?: Function | any;
}

const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  [{ font: [] }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline"],
  [{ color: [] }, { background: [] }],
  [{ script: "sub" }, { script: "super" }],
  [{ align: [] }],
  ["image", "blockquote", "code-block"],
  ["clean"],
];

const TextEditor = ({ className, value, setValue }: Props) => {
  console.log(value);
  return (
    <div className={className == "page" ? "container_page" : styles.container}>
      <ReactQuill
        value={value}
        onChange={setValue}
        modules={{ toolbar: TOOLBAR_OPTIONS }}
      />
    </div>
  );
};
export default TextEditor;
