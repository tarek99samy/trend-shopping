import React, { useEffect, useState } from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import Pie2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import "../../index.css";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

export default function Home() {
	const initialMobiles = [
		{
			name: "galaxy s4",
			brand: "Samsung",
			year: "2016",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "xperia Z ultra",
			brand: "Sony",
			year: "2010",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "iphone X max",
			brand: "Apple",
			year: "2020",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "note one",
			brand: "Nokia",
			year: "2014",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "mate neo dual",
			brand: "LG",
			year: "2011",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "galaxy s4",
			brand: "Samsung",
			year: "2016",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "xperia Z",
			brand: "Sony",
			year: "2010",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "iphone X max",
			brand: "Apple",
			year: "2020",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "note one",
			brand: "Nokia",
			year: "2014",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "mate neo dual",
			brand: "LG",
			year: "2011",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "galaxy s4",
			brand: "Samsung",
			year: "2016",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "xperia Z",
			brand: "Sony",
			year: "2010",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "iphone X max",
			brand: "Apple",
			year: "2020",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "note one",
			brand: "Nokia",
			year: "2014",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
		{
			name: "mate neo dual",
			brand: "LG",
			year: "2011",
			color: "black",
			screen: `5"`,
			simType: "dual sim",
			memory: "64GB",
		},
	];
	const initialData = {
		allMobiles: initialMobiles,
		brands: ["Sony", "Samsung", "Apple", "Nokia", "LG"],
		memories: ["16GB", "32GB", "64GB", "128GB"],
	};
	const [searchModelName, setSearchModelName] = useState(null);
	const [searchBrand, setSearchBrand] = useState(null);
	const [currentMobiles, setCurrentMobiles] = useState([]);
	const [currentMobile, setCurrentMobile] = useState({});
	const [barChartData, setBarChartData] = useState([]);
	const [pieChartData, setPieChartData] = useState([]);

	const barChartConfigs = {
		type: "column2d",
		width: "500",
		height: "400",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "manufacture year VS mobile count",
				xAxisName: "Year",
				yAxisName: "Count",
				numberSuffix: "K",
				theme: "fusion",
			},
			data: barChartData,
		},
	};

	const pieChartConfigs = {
		type: "pie2d",
		width: "500",
		height: "400",
		dataFormat: "json",
		dataSource: {
			chart: {
				caption: "brand VS mobile count",
				numberSuffix: "K",
				theme: "fusion",
			},
			data: pieChartData,
		},
	};

	useEffect(() => {
		if (!localStorage.getItem("data")) {
			localStorage.setItem("data", JSON.stringify(initialData));
		} else {
			let allData = JSON.parse(localStorage.getItem("data"));
			setCurrentMobiles(allData.allMobiles);
			setCurrentMobile(allData.allMobiles[0]);

			let temp = { 0: {}, 1: {} },
				barChartTemp = [],
				pieChartTemp = [];
			console.log(allData.allMobiles);

			allData.allMobiles.forEach((v) => {
				temp[0][v.year] = (temp[0][v.year] || 0) + 1;
				temp[1][v.brand] = (temp[1][v.brand] || 0) + 1;
			});

			Object.keys(temp[0]).forEach((key, idx) => {
				barChartTemp.push({ label: key, value: temp[0][key] });
			});

			Object.keys(temp[1]).forEach((key, idx) => {
				pieChartTemp.push({ label: key, value: temp[1][key] });
			});

			setBarChartData(barChartTemp);
			setPieChartData(pieChartTemp);
		}
	}, []);

	const handleSelect = (e) => {
		console.log(e.target.value);
		setSearchBrand(e.target.value);
	};

	const handleTextInput = (e) => {
		setSearchModelName(e.target.value);
	};

	const handleRowClick = (index) => {
		setCurrentMobile(currentMobiles[index]);
	};

	const handleSearch = (e) => {
		e.preventDefault();

		let tmp = currentMobiles.filter((element) => {
			if (searchBrand && searchModelName && element.brand === searchBrand && element.name === searchModelName)
				return element;
			if (!searchModelName && element.brand === searchBrand) return element;
			if (!searchBrand && element.name === searchModelName) return element;
			return null;
		});

		if (!tmp.length) {
			alert("no mobiles found");
			window.location.reload();
		} else {
			setCurrentMobiles(tmp);
			setCurrentMobile(tmp[0]);
		}
	};

	return (
		<div className='container-fluid d-flex flex-column flex-xxl-row'>
			<div className='col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12'>
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
								<option value=''>choose brand</option>
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
					{currentMobile &&
						Object.values(currentMobile).map((value, index) => (
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

			<div className='col-xxl-6 col-xl-12 col-lg-12 col-md-12 col-sm-12 mt-5 d-flex flex-column justify-content-start align-items-center'>
				<ReactFC {...barChartConfigs} />
				<ReactFC {...pieChartConfigs} />
			</div>
		</div>
	);
}
