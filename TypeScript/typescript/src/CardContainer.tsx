import Card from "./Card"

const CardContainer = () => {
	
	const data = [
		{name: "Jose"},
		{name: "Britt"},
		{name: "Matt"},
		{name: "Dustin"},
		{name: "Justin"},
		{name: "Kayla"},
		{name: "Deanna"},
		{name: "Cameron"},
		{name: "Tim"},
		{name: "Ron"},
		{name: "Jamie"},
		{name: "Brande"},
		{name: "Jordan"},
		{name: "Xavier"},
	 ]
	
	
	
	
	return (
		<div>
			<h1>Hello</h1>
			{data.map((data)=>(
			<Card data={data}/>
			))}
		</div>
	)
}

export default CardContainer