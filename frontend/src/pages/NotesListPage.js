import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddNotes from "../components/AddNotes";

function NotesListPage() {
  let [notes, setNoets] = useState([]);

  useEffect(() => {
    getNoets();
  }, []);

  let getNoets = async () => {
    let response = await fetch("/api/notes/");
    let data = await response.json();
    setNoets(data);
  };

  return (
    <div className="notes">
      <div className="notes-header">
        <h2 className="notes-title">&#9782; Notes</h2>
        <p className="notes-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
      <AddNotes />
    </div>
  );
}

export default NotesListPage;
