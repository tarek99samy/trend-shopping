import React from "react";

export default function Form(props) {
	return (
		<>
			{props.rows.map((row, index) => (
				<div className='container w-50 d-lg-flex mt-5'>
					<div className=''>
						<label htmlFor='model-name' className='form-label'>
							Model Name
						</label>
						<input type='text' className='form-control' id='model-name' placeholder='i.e. galaxy s3 neo' />
					</div>
					<div className='me-5 ms-5'>
						<label htmlFor='brand' class='form-label'>
							Brand
						</label>
						<select id='brand' class='form-select'>
							<option>choose brand</option>
						</select>
					</div>
				</div>
			))}
		</>
	);
}
