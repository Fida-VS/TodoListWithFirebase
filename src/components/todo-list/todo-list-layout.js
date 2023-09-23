import styles from './todo-list.module.css';
import { AddNewTodoForm } from '../addNewTodoForm/addNewTodoForm';
import { Todo } from '../todo/todo';

export const TodoListLayout = ({value, setValue, requestAddNewTodo, isSorted, setIsSorted, todos, requestUpdateTodo, requestDeleteTodo}) => {
	return (
		<>
			<AddNewTodoForm
				value={value}
				setValue={setValue}
				requestAddNewTodo={requestAddNewTodo}
				isSorted={isSorted}
				setIsSorted={setIsSorted}
			/>
			<ul className={styles.todoList}>
				{Object.entries(todos).map(([id, { text }]) => (
					<Todo
						key={id}
						text={text}
						id={id}
						requestUpdateTodo={requestUpdateTodo}
						requestDeleteTodo={requestDeleteTodo}
					/>
				))}
			</ul>
		</>
	);
};
