import React from 'react';
import './myStyles.css';

function Stylesheet(props) {
	let primaryColor = props.primary ? 'primary' : '';
	return (
		<div>
			<h1 className={`${primaryColor} font-xl`}>Stylesheet</h1>
		</div>
	);
}

export default Stylesheet;
