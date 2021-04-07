import React, { useEffect, useState } from "react";
import Form from "../../components/form/form";
import "../../index.css";

export default function Home() {
	const data = [
		{ name: "galaxy s4", brand: "Samsung", year: "2016", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "xperia Z ultra", brand: "Sony", year: "2010", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "iphone X max", brand: "Apple", year: "2020", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "note one", brand: "Nokia", year: "2014", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "mate neo dual", brand: "LG", year: "2011", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "galaxy s4", brand: "Samsung", year: "2016", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "xperia Z", brand: "Sony", year: "2010", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "iphone X max", brand: "Apple", year: "2020", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "note one", brand: "Nokia", year: "2014", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "mate neo dual", brand: "LG", year: "2011", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "galaxy s4", brand: "Samsung", year: "2016", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "xperia Z", brand: "Sony", year: "2010", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "iphone X max", brand: "Apple", year: "2020", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "note one", brand: "Nokia", year: "2014", color: "black", screen: `5"`, simType: "dual sim" },
		{ name: "mate neo dual", brand: "LG", year: "2011", color: "black", screen: `5"`, simType: "dual sim" },
	];
	const initialData = {
		allMobiles: data,
		currentMobiles: data,
		brands: ["Sony", "Samsung", "Apple", "Nokia", "LG"],
		memories: ["16GB", "32GB", "64GB", "128GB"],
	};
	const [searchModelName, setSearchModelName] = useState(null);
	const [searchBrand, setSearchBrand] = useState(null);
	const [currentMobiles, setCurrentMobiles] = useState([]);
	const [currentMobile, setCurrentMobile] = useState({});

	useEffect(() => {
		if (!localStorage.getItem("data")) {
			localStorage.setItem("data", JSON.stringify(initialData));
		}
		setCurrentMobiles(JSON.parse(localStorage.getItem("data")).currentMobiles);
		setCurrentMobile(data[0]);
		console.log(currentMobiles);
	}, []);

	const handleSelect = (e) => {
		setSearchBrand(e.target.value);
	};

	const handleTextInput = (e) => {
		setSearchModelName(e.target.value);
	};

	const handleRowClick = (index) => {
		console.log(index);
		setCurrentMobile(currentMobiles[index]);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		let tmp = currentMobiles.filter((element) => {
			if (searchBrand && searchModelName && element.brand === searchBrand && element.name === searchModelName)
				return element;
			if (searchBrand && element.brand === searchBrand) return element;
			if (searchModelName && element.name === searchModelName) return element;
			return null;
		});
		console.log(tmp);
	};

	return (
		<div className='container-fluid d-flex flex-row'>
			<div className='w-75'>
				<form onSubmit={handleSearch} className='container mt-5 mb-5'>
					<div className='row justify-content-around mt-5 mb-5'>
						<div className='col-4'>
							<label htmlFor='model' className='form-label'>
								Model Name
							</label>
							<input
								type='text'
								id='model'
								className='form-control'
								placeholder='e.g. galaxy se neo'
								onChange={handleTextInput}
							/>
						</div>

						<div className='col-4'>
							<label htmlFor='disabledSelect' className='form-label'>
								Brand
							</label>
							<select id='disabledSelect' className='form-select' onChange={handleSelect}>
								<option>choose brand</option>
								{initialData.brands.map((item, index) => (
									<option key={index}>{item}</option>
								))}
							</select>
						</div>
					</div>
					<div className='row d-flex justify-content-center mt-5'>
						<button type='submit' className='btn btn-success col-2'>
							search
						</button>
					</div>
				</form>

				<table className='table table-light table-bordered border-dark table-striped table-hover mt-5 mb-5'>
					<thead>
						<tr>
							<th scope='col'>Brand</th>
							<th scope='col'>Model</th>
							<th scope='col'>Year</th>
						</tr>
					</thead>
					<tbody>
						{currentMobiles.map((mobile, index) => (
							<tr role='button' key={index} onClick={() => handleRowClick(index)}>
								<td>{mobile.brand}</td>
								<td>{mobile.name}</td>
								<td>{mobile.year}</td>
							</tr>
						))}
					</tbody>
				</table>

				<div className='d-flex flex-column align-items-center mb-5'>
					{Object.values(currentMobile).map((value, index) => (
						<div className='input-group w-50 mb-2' key={index}>
							<span className='input-group-text w-25 justify-content-center me-2 bg-dark text-white'>
								{Object.keys(currentMobiles[0])[index]}
							</span>
							<input
								type='text'
								aria-label='First name'
								className='form-control text-center bg-dark text-white'
								value={value}
								disabled
							/>
						</div>
					))}
				</div>
			</div>

			<div className='w-25'>
				{/*  */}
				{/*  */}
			</div>
		</div>
	);
}
