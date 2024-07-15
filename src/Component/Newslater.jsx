import React from 'react';
import { Link } from 'react-router-dom';

const Newslater = () => {
	return (
		<section className="dark:bg-gray-100 dark:text-gray-800">
			<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-0 xl:max-w-3xl">
				<h1 className="text-4xl font-bold text-pink-600 leading-none sm:text-5xl">Crafting Connections <br /> 
					 Through Textile Art
				</h1>
				<p className="px-8 mt-8 mb-12 text-lg">Discover the beauty and intricacy of textile art that transcends boundaries and brings people together. Immerse yourself in a world where creativity and craftsmanship unite to tell unique stories and inspire meaningful connections.!</p>
				<div className="flex flex-wrap gap-5 justify-center">
					<button>

						<a href="#_" class="relative inline-flex items-center px-12 py-3 overflow-hidden text-lg font-medium text-indigo-600 border-2 border-indigo-600 rounded-full hover:text-white group hover:bg-gray-50">
							<span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
							<span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
								<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
							</span>
							<Link to={'/allart'}><span class="relative">Get started</span></Link>
						</a>


					</button>
					<button >
						<a href="#_" class="w-full py-4 text-xl text-center text-white transition-colors duration-300 bg-green-400 rounded-full hover:bg-green-500 ease px-9 md:w-auto">
							Learn more
						</a>
					</button>

				</div>
			</div>
		</section>
	);
};

export default Newslater;