import React from "react";
import { TodoItem } from "./TodoItem.js";

export const Todos = ({ toDos, onDelete }) => {
    let containerStyle = {
    border: "1px solid",
    padding: "10px",
    boxShadow: "5px 10px 18px green",
    borderRadius: "25px",
  };

  return (
    <>
      <div className="container" style={containerStyle}>
        <h1 className="text-center">ToDo Items</h1>
        {toDos.length === 0 ? (
          <h3 className="text-center">No ToDos to display</h3>
        ) : (
          toDos.map((todo) => {
            return <TodoItem key={todo.sNo} todo={todo} onDelete={onDelete} />;
          })
        )}
      </div>
    </>
  );
};
