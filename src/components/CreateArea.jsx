import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
// import Fab from '@mui/material/Fab';
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [isExpand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const inpHandle = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpand(true);
  };

  return (
    <div>
      <form>
        {isExpand ? (
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={inpHandle}
          />
        ) : null}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? 3 : 1}
          value={note.content}
          onChange={inpHandle}
          onClick={expand}
        />

        <Zoom in={isExpand}>
          <button className="FabStyle" onClick={submitNote}>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
