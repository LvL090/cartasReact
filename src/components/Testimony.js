import React from 'react';

function Testimony(props) {
	return (
	<div className='testimony ml-2 mb-2 flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
		<img 
			className='imgTestimony object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' 
			src={require(`../img/${props.img}.jpg`)}
			alt='photo michis'/>
		<div className='Containertestimonytext flex flex-col justify-between p-4 leading-normal'>
			<p className='testiomonyName mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'> {props.name} en {props.country} </p>
			<p className='testimonyPosition mb-3 font-normal text-gray-700 dark:text-gray-400'> {props.position} en {props.business} </p>
			<p className='testimonyText mb-3 font-normal text-gray-700 dark:text-gray-400'>"{props.text}"</p>
		</div>
	</div>
	);

}

export default Testimony;