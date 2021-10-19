import react ,{ FC } from "react"

interface Cardprops {
	data: {
		name: string
		
	};
}


const Card:FC<Cardprops> = (props) => {
	return (
		<div>
			<h1>{props.data.name}</h1>
		</div>
	)
}

export default Card