// insert data for headsets and other products
import quest from "../assets/Quest.png"

import valve from "../assets/Index.png"
import vive from "../assets/Pro.png"
import cosmo from "../assets/Cosmo.png"
import playstation from "../assets/PlayStation.png"






const initialState =
	[
		
		
		
		
		{
			
			brand: "Oculus",
			name: "Quest 2",
			size: "128 GB",
			price: 299,
			image: quest,
			quantity: 1

		},
		{
			
			brand: "Oculus",
			name: "Quest 2",
			size: "256 GB",
			price: 399,
			image: quest,
			quantity: 1

		},
		{
			
			brand: "Valve",
			name: "Index",
			price: 1000,
			image:valve,
			quantity: 1

		},
		{
			
			brand: "Vive",
			name: "Pro 2",
			price: 1400,
			image:vive,
			quantity: 1

		},
		{
			
			brand: "Vive",
			name: "Cosmos Elite",
			price: 900,
			image:cosmo,
			quantity: 1

		},
		{
			
			brand: "PlayStation",
			name: "VR",
			price: 350,
			image:playstation,
			quantity: 1

		}
	]


export default initialState;