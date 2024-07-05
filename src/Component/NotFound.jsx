import React from 'react';
import Error from './Error';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<Error></Error>
		<p className="text-3xl">Looks like our services are currently offline</p>
		<Link to={'/'}  className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Back to homepage</Link>
	</div>
</section>
    );
};

export default NotFound;