const Spots = () => {
	const spots = [
		{
			_id: "1a2b3c4d5e6f7g8h9i0j",
			image: "https://example.com/images/eiffel_tower.jpg",
			tourist_spot_name: "Eiffel Tower",
			country_name: "France",
			location: "Paris",
			short_description:
				"An iconic iron lattice tower and one of the most recognized monuments in the world.",
			average_cost: 1500,
			seasonality: "Summer",
			travel_time: "5 days",
			totalVisitorsPerYear: 7000000,
		},
		{
			_id: "2b3c4d5e6f7g8h9i0j1a",
			image: "https://example.com/images/great_wall.jpg",
			tourist_spot_name: "Great Wall of China",
			country_name: "China",
			location: "Beijing",
			short_description:
				"A historic series of walls and fortifications stretching over 13,000 miles.",
			average_cost: 1200,
			seasonality: "Winter",
			travel_time: "7 days",
			totalVisitorsPerYear: 10000000,
		},
		{
			_id: "3c4d5e6f7g8h9i0j1a2b",
			image: "https://example.com/images/machu_picchu.jpg",
			tourist_spot_name: "Machu Picchu",
			country_name: "Peru",
			location: "Andes Mountains",
			short_description:
				"An ancient Incan city surrounded by breathtaking mountain views.",
			average_cost: 2500,
			seasonality: "Spring",
			travel_time: "10 days",
			totalVisitorsPerYear: 1500000,
		},
		{
			_id: "4d5e6f7g8h9i0j1a2b3c",
			image: "https://example.com/images/statue_of_liberty.jpg",
			tourist_spot_name: "Statue of Liberty",
			country_name: "USA",
			location: "New York City",
			short_description:
				"A symbol of freedom and democracy, gifted by France to the USA.",
			average_cost: 800,
			seasonality: "Fall",
			travel_time: "3 days",
			totalVisitorsPerYear: 4300000,
		},
		{
			_id: "5e6f7g8h9i0j1a2b3c4d",
			image: "https://example.com/images/taj_mahal.jpg",
			tourist_spot_name: "Taj Mahal",
			country_name: "India",
			location: "Agra",
			short_description:
				"A stunning white marble mausoleum built by Emperor Shah Jahan.",
			average_cost: 1000,
			seasonality: "Winter",
			travel_time: "5 days",
			totalVisitorsPerYear: 8000000,
		},
		{
			_id: "6f7g8h9i0j1a2b3c4d5e",
			image: "https://example.com/images/pyramids_of_giza.jpg",
			tourist_spot_name: "Pyramids of Giza",
			country_name: "Egypt",
			location: "Giza",
			short_description:
				"Ancient pyramid structures that are a testament to Egypt's rich history.",
			average_cost: 1400,
			seasonality: "Spring",
			travel_time: "6 days",
			totalVisitorsPerYear: 4500000,
		},
		{
			_id: "7g8h9i0j1a2b3c4d5e6f",
			image: "https://example.com/images/sydney_opera_house.jpg",
			tourist_spot_name: "Sydney Opera House",
			country_name: "Australia",
			location: "Sydney",
			short_description:
				"A world-renowned architectural masterpiece and cultural venue.",
			average_cost: 2000,
			seasonality: "Summer",
			travel_time: "7 days",
			totalVisitorsPerYear: 8500000,
		},
		{
			_id: "8h9i0j1a2b3c4d5e6f7g",
			image: "https://example.com/images/niagara_falls.jpg",
			tourist_spot_name: "Niagara Falls",
			country_name: "USA/Canada",
			location: "Niagara",
			short_description:
				"A breathtaking set of three waterfalls at the border of the USA and Canada.",
			average_cost: 900,
			seasonality: "Fall",
			travel_time: "4 days",
			totalVisitorsPerYear: 12000000,
		},
		{
			_id: "9i0j1a2b3c4d5e6f7g8h",
			image: "https://example.com/images/santorini.jpg",
			tourist_spot_name: "Santorini",
			country_name: "Greece",
			location: "Cyclades Islands",
			short_description:
				"A picturesque island known for its whitewashed buildings and stunning sunsets.",
			average_cost: 1800,
			seasonality: "Summer",
			travel_time: "7 days",
			totalVisitorsPerYear: 2000000,
		},
	];

	return (
		<>
			{spots.map((spot) => {
				return (
					<div className="card card-compact bg-base-100 w-96 shadow-xl">
						<figure>
							<img src={spot.image} />
						</figure>
						<div className="card-body">
							<h2 className="card-title">
								{spot.tourist_spot_name}
							</h2>
							<p>{spot.country_name}</p>
							<div className="card-actions">
								<button className="btn btn-primary">
									View Details
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
};

export default Spots;
