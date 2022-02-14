import React from "react";
import { useRecoilState } from "recoil";
import { filterState } from "../Store/fiterTask";

const Filter = () => {
  const [filter, setFilter] = useRecoilState(filterState);
  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      <select onChange={updateFilter} value={filter}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="undone">Undone</option>
      </select>
    </div>
  );
};

export default Filter;
