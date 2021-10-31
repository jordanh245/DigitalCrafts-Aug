// insert data for headsets and other products
import quest from "../assets/Quest.png"
import valve from "../assets/Index.png"
import vive from "../assets/Pro.png"
import cosmo from "../assets/Cosmo.png"
import playstation from "../assets/PlayStation.png"



const initialState =
	[
		
		
		
		
		
		{
			
			brand: "Valve",
			name: "Index",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Requires PC",
			price: 1000,
			image:valve,
			quantity: 1

		},
		{
			
			brand: "Vive",
			name: "Pro 2",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Requires PC",
			price: 1400,
			image:vive,
			quantity: 1

		},
		{
			
			brand: "Vive",
			name: "Cosmos Elite",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Requires PC",
			price: 900,
			image:cosmo,
			quantity: 1

		},
		{
			
			brand: "PlayStation",
			name: "VR",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Requires PC",
			price: 350,
			image:playstation,
			quantity: 1

		},
		{
			
			brand: "Oculus",
			name: "Quest 2 - 128 GB",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Does Not Require PC",
		
			price: 299,
			image: quest,
			quantity: 1

		},
		{
			
			brand: "Oculus",
			name: "Quest 2 - 256 GB",
			description: " Headset,  Connection cable, 2 controllers, 2 base stations.",
			pc : "Does Not Require PC",
			price: 399,
			image: quest,
			quantity: 1

		},
	]


export default initialState;