import React from 'react';

function NamedList() {
	const names = ['Bruce', 'Clark', 'Diana'];
	const nameList = names.map((name) => <h2>{name}</h2>);
	return <div>{nameList}</div>;
}

export default NamedList;
