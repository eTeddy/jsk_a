import { useState } from "react";

export const Fox = () => {
	const [ num, setNum ] = useState(1);

	const newnum = () => {
		setNum(Math.floor(Math.random() * 121) + 1)
	}

	return (
		<div>
			<button onClick={newnum}>New 🦊Fox</button>				
			<img src={`https://randomfox.ca/images/${num}.jpg`} alt="" />        
		</div>
	)
}
 