import React, { useState } from "react";
import { useRecoilState } from "recoil";
import taskListState from "../Store/TaskState";

const Task = ({ task }) => {
  const [edit, setEdit] = useState(false);
  const [editText, seteditText] = useState(task.text);
  const [taskList, setTaskList] = useRecoilState(taskListState);

  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  const handleEdit = () => setEdit(!edit);
  const handleText = (e) => seteditText(e.target.value);
  const handleTask = (id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, text: editText } : task
      )
    );
    setEdit(false);
  };
  const handleDone = (id) =>
    setTaskList(
      taskList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );

  return (
    <div>
      {edit ? (
        <div>
          <input type="text" value={editText} onChange={handleText} />
          <input type="submit" onClick={() => handleTask(task.id)} />
        </div>
      ) : (
        <h3 className={task.done ? "task_done" : null}>{task.text}</h3>
      )}
      <button onClick={() => handleDelete(task.id)}>delete</button>
      <button onClick={handleEdit}>edit</button>
      <button onClick={() => handleDone(task.id)}>
        {task.done ? "undone" : "done"}
      </button>
    </div>
  );
};

export default Task;
