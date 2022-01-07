import axios from "axios";
import React, { useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("");
  const [list, setList] = useState([]);
  const handleMsgChange = (a) => {
    setMsg(e.target.value);
  };

  const addMsg = async () => {
    const url = "http://localhost:5000/add-msg";
    const data = {
      msg: msg,
    };
    await axios.post(url, data);
    const newMsg = [data, ...list];
    setList(newMsg);
    setMsg("");
  };
  const getMsg = () => {
    const url = "http://localhost:5000/msg";
    const result = await axios(url);
    const list = await result.json();

    const newList = [...list];
    setList = newList;
  };

  return (
    <>
      <UI></UI>
    </>
  );
}
function UI() {
  const studentName = "omkar";
  const id = 53;
  const [msg, setMsg] = useState("");
  return (
    <div>
      <header className="bg-secondary">
        <h1>
          MYCHATAPP
          <span className="fs-4">
            by
            {studentName}
            {id}
          </span>
        </h1>
      </header>

      <div className="input-group">
        <textarea
          name=""
          id=""
          cols="120"
          rows="2"
          value={msg}
          onChange={handleMsgChange}
        ></textarea>
        <span>
          <input type="submit" value="send" onClick={addMsg} />
        </span>
      </div>
    </div>
  );
}
