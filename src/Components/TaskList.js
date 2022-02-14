import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "../Store/fiterTask";
import Task from "./Task";

const TaskList = () => {
  const taskList = useRecoilValue(filteredTodoListState);
  console.log(taskList);
  return (
    <div>
      {taskList.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
