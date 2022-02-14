import React, { useState } from "react";
import { useRecoilState } from "recoil";
import taskListState from "../Store/TaskState";

const AddTask = () => {
  const [text, setText] = useState("");
  const [taskList, setTaskListState] = useRecoilState(taskListState);

  const handleChange = (e) => setText(e.target.value);

  const handleAdd = (e) => {
    e.preventDefault();
    setTaskListState([...taskList, { id: Math.random(), text, done: false }]);
    setText("");
  };

  return (
    <form>
      <input
        placeholder="enter your new challenge"
        type="text"
        onChange={handleChange}
        value={text}
      />
      <input type="submit" onClick={handleAdd} />
    </form>
  );
};

export default AddTask;
