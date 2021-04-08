import React, { useState } from "react";

export default function AddMobile({ history }) {
	const [data, setData] = useState({ name: "", brand: "", year: "", color: "", screen: "", simType: "" });

	const handlInput = (e) => {
		setData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleBack = (e) => {
		history.push("/");
	};

	const handleSave = (e) => {
		let prevData = JSON.parse(localStorage.getItem("data"));
		prevData.allMobiles.push(data);
		localStorage.setItem("data", JSON.stringify(prevData));
	};

	console.log(data);

	return (
		<form onSubmit={handleSave} className='container mt-5 mb-5'>
			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-4'>
					<label htmlFor='name' className='form-label'>
						Model Name
					</label>
					<input
						type='text'
						id='name'
						className='form-control'
						placeholder='e.g. galaxy se neo'
						onChange={handlInput}
					/>
				</div>

				<div className='col-4'>
					<label htmlFor='year' className='form-label'>
						Year
					</label>
					<input
						type='number'
						id='year'
						className='form-control'
						placeholder='e.g.2020'
						onChange={handlInput}
					/>
				</div>
			</div>

			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-4'>
					<label htmlFor='brand' className='form-label'>
						Brand
					</label>
					<select id='brand' className='form-select' onChange={handlInput}>
						<option value=''>choose brand</option>
						{JSON.parse(localStorage.getItem("data")).brands.map((item, index) => (
							<option key={index}>{item}</option>
						))}
					</select>
				</div>

				<div className='col-4'>
					<label htmlFor='memory' className='form-label'>
						Memory
					</label>
					<select id='memory' className='form-select' onChange={handlInput}>
						<option value=''>choose memory</option>
						{JSON.parse(localStorage.getItem("data")).memories.map((item, index) => (
							<option key={index}>{item}</option>
						))}
					</select>
				</div>
			</div>

			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-4'>
					<label htmlFor='name' className='form-label'>
						Model Name
					</label>
					<input
						type='text'
						id='name'
						className='form-control'
						placeholder='e.g. galaxy se neo'
						onChange={handlInput}
					/>
				</div>

				<div className='col-4'>
					<label htmlFor='year' className='form-label'>
						Year
					</label>
					<input
						type='number'
						id='year'
						className='form-control'
						placeholder='e.g.2020'
						onChange={handlInput}
					/>
				</div>
			</div>
			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-4'>
					<label htmlFor='name' className='form-label'>
						Model Name
					</label>
					<input
						type='text'
						id='name'
						className='form-control'
						placeholder='e.g. galaxy se neo'
						onChange={handlInput}
					/>
				</div>

				<div className='col-4'>
					<label htmlFor='year' className='form-label'>
						Year
					</label>
					<input
						type='number'
						id='year'
						className='form-control'
						placeholder='e.g.2020'
						onChange={handlInput}
					/>
				</div>
			</div>

			<div className='row d-flex justify-content-evenly mt-5'>
				<button type='button' className='btn btn-danger col-2' onClick={handleBack}>
					back
				</button>
				<button type='submit' className='btn btn-success col-2'>
					save
				</button>
			</div>
		</form>
	);
}
