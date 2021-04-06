import React, { useEffect, useState } from "react";
import Form from "../../components/form/form";
import "../../index.css";

export default function Home() {
	const [homeFormData, setHomeFormData] = useState([]);

	useEffect(() => {
		if (!localStorage.getItem("brands")) {
			let brands = ["Sony", "Samsung", "Apple", "Nokia", "LG"];
			localStorage.setItem(brands);
		}

		if (!localStorage.getItem("memories")) {
			let memories = ["16GB", "32GB", "64GB", "128GB"];
			localStorage.setItem(memories);
		}

		if (!localStorage.getItem("mobiles")) {
			let mobiles = [
				{ name: "galaxy s4 neo", brand: "Samsung", year: "2016" },
				{ name: "xperia Z", brand: "Sony", year: "2010" },
				{ name: "iphone X max", brand: "Apple", year: "2020" },
				{ name: "note one", brand: "Nokia", year: "2014" },
				{ name: "mate neo dual", brand: "LG", year: "2011" },
			];
			localStorage.setItem(mobiles);
		}
		// console.log(JSON.parse(localStorage.getItem("brands")));
		// let formData = [[{}, {}], [{}]];
		// setHomeFormData(formData);
	}, []);

	const handleSearch = (e) => {};

	return (
		<div className='container-fluid d-flex flex-row'>
			<div className='w-75 border-right'>
				<form onSubmit={handleSearch} className='container '>
					<div className='row justify-content-around'>
						<div className='col-4'>
							<label htmlFor='model' className='form-label'>
								Model Name
							</label>
							<input type='text' id='model' className='form-control' placeholder='e.g. galaxy se neo' />
						</div>

						<div className='col-4'>
							<label htmlFor='disabledSelect' className='form-label'>
								Brand
							</label>
							<select id='disabledSelect' className='form-select'>
								<option>choose brand</option>
								{/* {JSON.parse(localStorage.getItem("brands")).map((item, index) => (
									<option key={index}>{item}</option>
								))} */}
							</select>
						</div>
					</div>
					<div className='row'>
						<button type='submit' className='btn btn-primary'>
							Submit
						</button>
					</div>
				</form>
			</div>

			<div className='w-25'>
				{/*  */}
				{/*  */}
			</div>
		</div>
	);
}
