import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCnAde9Ou-LX5iM-UWURg8OPgDm6ZlU12I',
	authDomain: 'todo-list-1c9f6.firebaseapp.com',
	projectId: 'todo-list-1c9f6',
	storageBucket: 'todo-list-1c9f6.appspot.com',
	messagingSenderId: '915192070880',
	appId: '1:915192070880:web:66ff762ecb63f02b9e0685',
	databaseURL:
		'https://todo-list-1c9f6-default-rtdb.europe-west1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
