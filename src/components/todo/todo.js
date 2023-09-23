import styles from './todo.module.css'

export const Todo = ({text, id, requestUpdateTodo, requestDeleteTodo}) => {
	return (
		<li className={styles.todo}>
			{text}
			<div className={styles.buttonDiv}>
			<button onClick={() => requestUpdateTodo(id)} className={styles.changeTodo}>🖉</button>
			<button onClick={() => requestDeleteTodo(id)} className={styles.deleteTodo}>✖</button>
			</div>
		</li>
	);
};
