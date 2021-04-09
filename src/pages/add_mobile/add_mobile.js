import React, { useState } from "react";

export default function AddMobile({ history }) {
	const [data, setData] = useState({ name: "", brand: "", year: "", color: "", screen: "", simType: "", memory: "" });

	const handlInput = (e) => {
		setData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const handleRadio = (e) => {
		setData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleBack = (e) => {
		history.push("/");
	};

	const handleSave = (e) => {
		e.preventDefault();
		let isValid = true;
		Object.values(data).forEach(
			(elm) => (isValid &= elm !== "" && elm !== null && elm !== undefined && elm ? 1 : 0)
		);
		if (!isValid) {
			alert("invalid data provided");
			return;
		}
		let prevData = JSON.parse(localStorage.getItem("data"));
		prevData.allMobiles.push(data);
		localStorage.setItem("data", JSON.stringify(prevData));
		history.push("/");
		window.location.reload();
	};

	console.log(data);

	return (
		<form onSubmit={handleSave} className='container mt-5 mb-5'>
			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
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

				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
					<label htmlFor='year' className='form-label'>
						Year
					</label>
					<input
						type='number'
						id='year'
						step={1}
						min='2000'
						max={Number(new Date().getFullYear())}
						pattern='[0-9]*'
						className='form-control'
						placeholder='e.g. 2020'
						onWheel={(e) => e.currentTarget.blur()}
						onChange={(e) => {
							if (+e.target.value <= Number(new Date().getFullYear()) && +e.target.value >= 2000)
								handlInput(e);
						}}
					/>
				</div>
			</div>

			<div className='row justify-content-around mt-5 mb-5'>
				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
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

				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
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
				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
					<span className=''>Color</span>
					<div className='form-check mt-3'>
						<input
							className='form-check-input'
							type='radio'
							id='black'
							name='color'
							value='black'
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='black'>
							Black
						</label>
					</div>

					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							id='white'
							name='color'
							value='white'
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='white'>
							White
						</label>
					</div>

					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							id='gold'
							name='color'
							value='gold'
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='gold'>
							Gold
						</label>
					</div>
				</div>

				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12'>
					<span className=''>Screen</span>
					<div className='form-check mt-3'>
						<input
							className='form-check-input'
							type='radio'
							id='5'
							name='screen'
							value={`5'`}
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='5'>
							5'
						</label>
					</div>

					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							id='6'
							name='screen'
							value={`6'`}
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='6'>
							6'
						</label>
					</div>

					<div className='form-check'>
						<input
							className='form-check-input'
							type='radio'
							id='7'
							name='screen'
							value={`7'`}
							onChange={handleRadio}
						/>
						<label className='form-check-label' htmlFor='7'>
							7'
						</label>
					</div>
				</div>
			</div>

			<div className='row mt-5 mb-5 justify-content-center'>
				<div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 d-flex align-items-start justify-content-evenly'>
					<span className=''>Sim Support</span>
					<div className='form-check-inline '>
						<input
							className='form-check-input'
							type='radio'
							id='3G'
							name='simType'
							value='3G'
							onChange={handleRadio}
						/>
						<label className='form-check-label ms-2' htmlFor='3G'>
							3G
						</label>
					</div>

					<div className='form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							id='4G'
							name='simType'
							value='4G'
							onChange={handleRadio}
						/>
						<label className='form-check-label ms-2' htmlFor='4G'>
							4G
						</label>
					</div>

					<div className='form-check-inline'>
						<input
							className='form-check-input'
							type='radio'
							id='5G'
							name='simType'
							value='5G'
							onChange={handleRadio}
						/>
						<label className='form-check-label ms-2' htmlFor='5G'>
							5G
						</label>
					</div>
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
