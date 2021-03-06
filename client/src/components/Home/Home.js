import React, { useEffect } from 'react';
import './Home.scss';

import CarStyle from '../CarStyle/CarStyle';

const Home = ({ carMakes, searchParams, checkNumValue, resetRedirect, onFormSubmit, carStyleSearch }) => {
	useEffect(() => {
		resetRedirect();
	});

	return (
		<div className="Home">
			<div className="Home__main-section jumbotron rounded-0">
				<div className="Home__main-container container">
					<h1 className="d-none d-md-block display-4 m-0 text-light">Search cars for sale</h1>
					<h1 className="d-block d-md-none text-light m-0">Search cars for sale</h1>

					<hr className="mt-4 mb-5 border-light" />

					<form className="mb-5" onSubmit={(e) => onFormSubmit(e)} name="home-form">
						<div className="form-row">
							<div className="col-12 col-sm-6 col-md-4 mb-2">
								<select className="form-control" name="make" defaultValue={searchParams.make[0]}>
									<option value="">Any Make</option>
									{carMakes.map((m) => (
										<option value={m} key={m}>
											{m}
										</option>
									))}
								</select>
							</div>
							<div className="col-12 col-sm-6 col-md-3 mb-2">
								<select
									className="form-control"
									name="condition"
									defaultValue={searchParams.condition}
									// onChange={(e) => onFormChange(e)}
								>
									<option value="">Any Condition</option>
									<option value="new">New</option>
									<option value="used">Used</option>
									<option value="certified">Certified</option>
								</select>
							</div>
							<div className="col-12 col-sm-6 col-md-3 mb-2">
								<input
									className="form-control"
									type="text"
									defaultValue={searchParams.zip}
									name="zip"
									placeholder="ZIP Code"
									minLength="5"
									maxLength="5"
									// onChange={(e) => onFormChange(e)}
									onInput={(e) => checkNumValue(e)}
								/>
							</div>
							<div className="col-12 col-sm-6 col-md-2 mb-2">
								<button className="btn btn-info w-100" type="submit">
									Search
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>

			<div className="Home__style-section container">
				<h2>Browse by Style</h2>
				<hr className="my-4 border-dark" />

				<div className="row">
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="SUV"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_SUVCROSS.png"
					/>
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="Sedan"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_SEDAN.png"
					/>
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="Pickup"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_TRUCKS.png"
					/>
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="Hatchback"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_HATCH.png"
					/>
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="Coupe"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_COUPE.png"
					/>
					<CarStyle
						carStyleSearch={carStyleSearch}
						carStyle="Wagon"
						imgUrl="https://content.autotrader.com/content/dam/autotrader/homepage/styles/DefaultDesk_Style_WAGON.png"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
