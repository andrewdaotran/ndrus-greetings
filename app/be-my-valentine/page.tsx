'use client'

import React, { useState } from 'react'
import Footer from '../components/Footer'

const BeMyValentine = () => {
	const [noClickedCounter, setNoClickedCounter] = useState(0)

	const [isYesClicked, setIsYesClicked] = useState(false)

	const [noClickedButtonContent, setNoClickedButtonContent] = useState([
		'no.',
		'are you sure?',
		'please?',
		'why are you doing this?',
	])

	const [yesButtonSize, setYesButtonSize] = useState([
		'py-2 px-4',
		'py-4 px-8',
		'py-6 px-12',
		'py-8 px-16',
	])

	const noButtonHandler = () => {
		if (noClickedCounter === 3) {
			setNoClickedCounter(0)
		} else {
			setNoClickedCounter(noClickedCounter + 1)
		}
	}

	return (
		<div className='relative grid justify-items-center items-center h-screen'>
			<div className='border border-black p-8 grid gap-8 '>
				<h2 className='text-3xl text-center'>Will you be my Valentine?</h2>
				<div className='flex gap-10  justify-center'>
					<button
						className={`border border-black rounded-md bg-green-300 ${yesButtonSize[noClickedCounter]} text-2xl`}
					>
						Yes!
					</button>
					<button
						className='border border-black rounded-md py-2 px-6 bg-red-400 '
						onClick={noButtonHandler}
					>
						{noClickedButtonContent[noClickedCounter]}
					</button>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default BeMyValentine
