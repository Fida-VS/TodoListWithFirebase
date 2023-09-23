import { useState, useEffect } from 'react';
import { TodoListLayout } from './todo-list-layout';
import { ref, onValue, push, set, remove } from 'firebase/database';
import { db } from '../../firebase';

export const TodoList = () => {
	const [todos, setTodos] = useState({});
	const [value, setValue] = useState('');
	const [isSorted, setIsSorted] = useState(false);

	useEffect(() => {
		const todosDbRef = ref(db, 'todos');

		return onValue(todosDbRef, (snapshot) => {
			const loadedTodos = snapshot.val() || {};
			setTodos(loadedTodos);
		});
	}, []);

	const requestAddNewTodo = () => {
		const todosDbRef = ref(db, 'todos');
		push(todosDbRef, {
			text: value,
		}).then((response) => {
			console.log('Todo added, answer of server:', response);
		});
	};

	const requestUpdateTodo = (id) => {
		const todoToUpdateDbRef = ref(db, 'todos/' + id);

		set(todoToUpdateDbRef, {
			text: value,
		})
			.then((response) => {
				console.log('Todo updated, answer of server:', response);
			});
	};

	const requestDeleteTodo = (id) => {

const todoToRemoveDbRef = ref(db, 'todos/' + id);

remove(todoToRemoveDbRef)
			.then((response) => {
				console.log('Todo deleted, answer of server:', response);
			});
	};

	
	return (
		<TodoListLayout
			value={value}
			setValue={setValue}
			isSorted={isSorted}
			setIsSorted={setIsSorted}
			requestAddNewTodo={requestAddNewTodo}
			requestUpdateTodo={requestUpdateTodo}
			requestDeleteTodo={requestDeleteTodo}
			// filteredTodos={filteredTodos}
			todos={todos}
		/>
	);
};
