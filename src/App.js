import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NamedList from './components/NamedList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css';
import styles from './appStyles.module.css';

function App() {
	return (
		<div className='App'>
			<Inline></Inline>
			<Stylesheet primary={true}></Stylesheet>
			<h1 className='error'>Error</h1>
			<h1 className={styles.success}>Success</h1>
			{/* <NamedList></NamedList> */}
			{/* <UserGreeting></UserGreeting> */}
			{/* <ParentComponent></ParentComponent> */}
			{/* <EventBind></EventBind> */}
			{/* <ClassClick></ClassClick> */}
			{/* <FunctionClick></FunctionClick> */}
			{/* <Counter></Counter>
			<Greet name='Bruce' heroName='Batman'>
				<p>This is children props</p>
			</Greet>
			<Greet name='Clark' heroName='Superman'></Greet>
			<button>Click Me!</button> */}
			{/* <Greet name='Diana' heroName='Wonderwoman'></Greet>
			<Welcome name='Bruce' heroName='Batman'></Welcome> */}
			{/* <Welcome name='Clark' heroName='Superman'></Welcome>
			<Welcome name='Diana' heroName='Wonderwoman'></Welcome>
			<Hello></Hello> */}
			{/* <Message></Message> */}
		</div>
	);
}

export default App;
