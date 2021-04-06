import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div className='container-fluid ps-xl-3'>
				<span className='navbar-brand fw-bolder fs-4'>Trend Shopping</span>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span className='navbar-toggler-icon'></span>
				</button>

				<div className='collapse navbar-collapse' id='navbarNav'>
					<ul className='navbar-nav w-25 d-flex justify-content-xl-evenly'>
						<li className='nav-item'>
							<Link className='nav-link fs-5 fw-normal' to='/'>
								Home
							</Link>
						</li>

						<li className='nav-item'>
							<Link className='nav-link fs-5 fw-normal' to='/addMobile'>
								Add Mobile
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
