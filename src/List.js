import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ item, dltFunc, editFunc, index }) => {
  return (
    <div className="py-3 text-lg flex justify-between">
      <h2>{item}</h2>
      <div>
        <button className="mx-2">
          <FaEdit onClick={() => editFunc(item, index)} />
        </button>
        <button>
          <FaTrash onClick={() => dltFunc(index)} />
        </button>
      </div>
    </div>
  );
};

export default List;
