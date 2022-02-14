import { atom, selector } from "recoil";
import taskListState from "./TaskState";

export const filterState = atom({
  key: "filterState",
  default: "all",
});
export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(filterState);
    console.log(filter);
    const list = get(taskListState);
    switch (filter) {
      case "undone":
        console.log(list);
        return list.filter((task) => !task.done);
      case "done":
        return list.filter((task) => task.done);
      default:
        return list;
    }
  },
});
