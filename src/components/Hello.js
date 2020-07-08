import React from 'react';

const Hello = () => {
	// return (
	// 	<div className = 'dummyClass'>
	// 		<h1> Hello Gudy</h1>
	// 	</div>
	// );

	return React.createElement(
		'div',
		{ id: 'hi' },
		React.createElement('h1', { className: 'hello' }, 'Hello Goody')
	);
};

export default Hello;
