import React, { useState } from "react";

export const AddTodo = ({ addTask }) => {
	let containerStyle = {
		border: "1px solid",
		padding: "10px",
		boxShadow: "5px 10px 18px grey",
		borderRadius: "25px",
	};

	let submitData = () => {
		if (!title || !description) {
			alert("Please fill all the fields");
		} else {
			addTask(title, description);
			setTitle("");
			setDescription("");
		}
	};

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	return (
		<div className="container text-center my-5" style={containerStyle}>
			<h1>Add Task</h1>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Enter Task Name
				</label>
				<input
					type="text"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					className="form-control"
					id="title"
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlTextarea1" className="form-label">
					Enter Task Description
				</label>
				<input
					type="text"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					className="form-control"
					id="description"
				/>
			</div>

			<button type="button" class="btn btn-success" onClick={submitData}>
				Add Task
			</button>
		</div>
	);
};
