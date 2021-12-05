import "./App.css";
import { Navbar } from "./components/Navbar.js";
import { Footer } from "./components/Footer.js";
import { Todos } from "./components/Todos.js";
import React, { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo.js";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import { About } from "./components/About.js";

function App() {
	let initTodo
	if (localStorage.getItem("todos") === null) {
		initTodo = [];
	}
	else {
		initTodo = JSON.parse(localStorage.getItem("todos"));
	}

	let onDelete = (deleteTodo) => {
		setTodos(
			todos.filter((element) => {
				return element !== deleteTodo;
			})
		);
	};

	let addTask = (title, description) => {
		let sNo;
		if (todos.length === 0) {
			sNo = 1;
		} else {
			sNo = todos[todos.length - 1].sNo + 1;
		}

		const newTodo = {
			sNo: sNo,
			title: title,
			desc: description,
		};
		setTodos([...todos, newTodo]);
	};

	let defaultToDos = [
		{
			sNo: 1,
			title: "Learn React",
			desc: "learn react js",
		},
		{
			sNo: 2,
			title: "Learn Python",
			desc: "learn python from stack overflow",
		},
		{
			sNo: 3,
			title: "Learn Java",
			desc: "learn java from internet",
		},
	]

	initTodo = initTodo.length === 0 ? initTodo.concat(defaultToDos) : initTodo;

	const [todos, setTodos] = useState(initTodo);

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={
							<>
								<AddTodo addTask={addTask} />
								<Todos toDos={todos} onDelete={onDelete} />
							</>
					} />
					<Route path="/about" element={
							<>
								<About />
							</>
					}/>
				</Routes>
			</Router>
			<Footer />
		</>
	);
}

export default App;
