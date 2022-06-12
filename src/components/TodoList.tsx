import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
	const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
	const {fetchTodos, setTodoPage} = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page, limit])

	if (loading) {
		return <h1>Идет загрузка...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}><b>Todo
			List:</b>
			{todos.map(todo =>
				<div key={todo.id}
					 style={{border: `1px solid gray`,
						 width: `350px`,
						 padding: `5px`,
						 backgroundColor: todo.completed === false ? "red" : "green"}}
				>{todo.id} - {todo.title} - {todo.completed ? `done`: `not done`}</div>
			)}
			<div style={{display: "flex"}}>
				{pages.map((p, ind) =>
					<div key={ind}
						 onClick={() => setTodoPage(p)}
						 style={{border: p === page ? '2px solid red' : '1px solid gray', padding: 10}}
					>
						{p}
					</div>
				)}
			</div>
		</div>
	);
};

export default TodoList;
