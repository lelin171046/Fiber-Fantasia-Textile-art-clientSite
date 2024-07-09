import { Button } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
	const [theme, setTheme] = useState('light');



	useEffect(() => {

		localStorage.setItem('theme', theme);
		const localTheme = localStorage.getItem('theme');
		document.querySelector('html').setAttribute('data-theme', theme)
	}, [theme])
	const handleTheme = (e) => {

		if (e.target.checked) {
			setTheme('dark')
		}
		else {
			setTheme('light')
		}
	}
	return (

		<div className="navbar shadow-lg dark:bg-gray-100 dark:text-gray-800">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16" />
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
						<li className="flex">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive
										? 'font-bold border-b-4 border-red-400 text-red-400'
										: 'font-semibold'
								}
							>
								Home
							</NavLink>
							<NavLink
								to="/allart"
								className={({ isActive }) =>
									isActive
										? 'font-bold border-b-4 border-red-400 text-red-400'
										: 'font-semibold'
								}
							>
								All Art & Craft
							</NavLink>
							<NavLink
								to="/additem"
								className={({ isActive }) =>
									isActive
										? 'font-bold border-b-4 border-red-400 text-red-400'
										: 'font-semibold'
								}
							>
								Add Item
							</NavLink>
							<NavLink
								to="/login"
								className={({ isActive }) =>
									isActive
										? 'font-bold border-b-4 border-red-400 text-red-400'
										: 'font-semibold'
								}
							>
								Log In
							</NavLink>
						</li>
					</ul>
				</div>
				<a className="btn btn-ghost text-xl">Fiber<span className='text-pink-500'>Fantasia</span></a>
			</div>
			<div className="navbar-center hidden lg:flex items-stretch space-x-3 ">
				<li className="flex gap-5">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? 'font-bold border-b-4 border-red-400 text-red-400'
								: 'font-semibold'
						}
					>
						Home
					</NavLink>
					<NavLink
						to="/allart"
						className={({ isActive }) =>
							isActive
								? 'font-bold border-b-4 border-red-400 text-red-400'
								: 'font-semibold'
						}
					>
						All Art & Craft
					</NavLink>
					<NavLink
						to="/additem"
						className={({ isActive }) =>
							isActive
								? 'font-bold border-b-4 border-red-400 text-red-400'
								: 'font-semibold'
						}
					>
						Add Item
					</NavLink>
					<NavLink
						to="/myart"
						className={({ isActive }) =>
							isActive
								? 'font-bold border-b-4 border-red-400 text-red-400'
								: 'font-semibold'
						}
					>
						My Art
					</NavLink>
					<NavLink
						to="/login"
						className={({ isActive }) =>
							isActive
								? 'font-bold border-b-4 border-red-400 text-red-400'
								: 'font-semibold'
						}
					>
						Log In
					</NavLink>

				</li>
			</div>
			<div className="navbar-end">
				<label className="flex cursor-pointer gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<circle cx="12" cy="12" r="5" />
						<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
					</svg>
					<input type="checkbox" onChange={handleTheme} className="toggle theme-controller" />
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
					</svg>
				</label>
			</div>

						

		</div>




	);
};

export default Header;