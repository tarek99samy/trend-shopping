import React, { useState } from "react";

export default function AddMobile() {
	const [data, setData] = useState({ name: "", brand: "", year: "", color: "", screen: "", simType: "" });

	const handlInput = (e) => {
		setData((prevState) => ({
			...prevState,
			[e.target.name]: "your updated value here",
		}));
	};

	const handleSave = (e) => {
		let prevData = JSON.parse(localStorage.getItem("data"));
		prevData.allMobiles.push(data);
	};
	console.log(data);

	return (
		<form onSubmit={handleSave} className='container mt-5 mb-5'>
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
	);
}
