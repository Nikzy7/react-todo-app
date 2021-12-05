import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    let containerStyle = {
        border: "1px solid",
        padding: "10px",
        boxShadow: "5px 10px 18px orange",
        borderRadius: "25px",
    };

    return (
        <div className="container text-center my-5" style={containerStyle}>

            <h2>{todo.title}</h2>
            <h4>{todo.desc}</h4>

            {/* <button type="button" className="btn btn-primary btn-sm mx-2">Edit</button> */}
            <button type="button" className="btn btn-sm btn-danger text-center my-2" onClick={() => onDelete(todo)}>Delete</button>

        </div>
    )
}
