import React, { Component } from 'react'
import CurrencyFormat from 'react-currency-format';
import './styles.css';

export default class CarCard extends Component {
	state = {
			changePic: true,
			make: "Bugatti",
			model: "La voiture noire",
			engine: "v16",
			horsepower: "1500",
			price: "19000000",
			image: [
			  {
				primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",
				secondary:
				"https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
			  },
			],
			transmission: "7 speed dual clutch",
			topSpeed: [{ US: "261", Metric: "420" }],
			carImage: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"
		  
	
}
changeImage = () => {
let image = this.state.changePic 
? this.state.image[0].primary 
: this.state.image[0].secondary;

this.setState({
	carImage: image,
	changePic : !this.state.changePic
});
}
changeNumber = () => {

}
	render() {

		
		return (
			<div className="section">
			<div className = "card">
				
					<h1>{this.state.make}</h1>
					<h2>{this.state.model}</h2>
					<p>Engine: {this.state.engine}</p>
					<p>Horsepower: {this.state.horsepower}</p>
					<p> Price: <CurrencyFormat value={this.state.price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
					<img src = {this.state.carImage}/>
					<button onClick={this.changeImage}>Change picture</button>
					<p>Transmission: {this.state.transmission}</p>
					<p>Top Speed US: {this.state.topSpeed[0].US}</p>
					<p>Top Speed Metric: {this.state.topSpeed[0].Metric}</p>
				
			</div>
			</div>
		)
	}
}
