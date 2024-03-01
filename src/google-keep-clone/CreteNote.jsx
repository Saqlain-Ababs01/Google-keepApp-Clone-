import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreteNote = (props) => {
  const [expand, setexpand] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    note: "",
  });

  const addData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(value);

    setInputData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const expandNote = () => {
    return setexpand(true);
  };

  const addNote = () => {
    props.passData(inputData);
    setInputData({
      title: "",
      note: "",
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="Note">
          <div className="input-note">
            <form>
              {expand ? (
                <input
                  required
                  type="text"
                  name="title"
                  placeholder="Write Title"
                  onChange={addData}
                  value={inputData.title}
                  autoComplete="off"
                />
              ) : null}
              <div>
                <textarea
                  onClick={expandNote}
                  type="text"
                  name="note"
                  placeholder="Write a Note"
                  onChange={addData}
                  cols="20"
                  rows="5"
                  value={inputData.note}
                />
              </div>
              <div className="button">
                {expand ? (
                  <Button onClick={addNote}>
                    <AddIcon />
                  </Button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreteNote;
