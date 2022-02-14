import { atom } from "recoil";

const taskListState = atom({
  key: "taskListState",
  default: [
    { id: Math.random(), text: "task1", done: false },
    { id: Math.random(), text: "task2", done: false },
  ],
});
export default taskListState;
