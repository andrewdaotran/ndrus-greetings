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
		'are you sure now?',
		'...',
		'now you gotta chase me...',
		'you hate me...',
	])

	const [noButtonSize, setNoButtonSize] = useState([
		'py-[0.6rem] px-5 text-sm',
		'py-[0.6rem] px-4 text-sm',
		'py-[0.5rem] px-3 text-xs',
		'py-[0.5rem] px-2 text-xs',
		'py-[0.5rem] px-2 text-xs absolute -top-5 right-10 ',
		' px-1 text-xs absolute -bottom-2 left-10 ',
		'px-1 text-xs absolute -top-3 left-[50%] transform -translate-x-1/2 ',
		'px-1 text-xs absolute  -right-12 top-16 transform  rotate-90',
	])

	const [yesButtonSize, setYesButtonSize] = useState([
		'py-2 px-4',
		'py-4 px-8',
		'py-6 px-12 text-xl',
		'py-8 px-16 text-2xl',
		'py-10 px-20 text-3xl z-10',
		'py-12 px-24 text-4xl z-10',
		'py-14 px-28 text-5xl ',
		'py-16 px-32 text-6xl ',
	])

	const noButtonHandler = () => {
		if (noClickedCounter === noClickedButtonContent.length - 1) {
			setNoClickedCounter(0)
		} else {
			setNoClickedCounter(noClickedCounter + 1)
		}
	}

	return (
		<div className='relative grid justify-items-center items-center h-screen'>
			<div className='border border-black p-8 grid gap-8 relative z-10 bg-inherit shadow-lg'>
				<h2 className='text-3xl text-center'>Will you be my Valentine?</h2>
				<div className='flex gap-10  justify-center items-center relative'>
					<button
						className={`border border-black rounded-md bg-green-300  ${yesButtonSize[noClickedCounter]} `}
					>
						Yes!
					</button>
					{noClickedCounter <= 5 && (
						<button
							className={`border border-black rounded-md  bg-red-400  ${noButtonSize[noClickedCounter]}`}
							onClick={noButtonHandler}
						>
							{noClickedButtonContent[noClickedCounter]}
						</button>
					)}
				</div>
				{noClickedCounter > 5 && (
					<button
						className={`border border-black rounded-md  bg-red-400  ${noButtonSize[noClickedCounter]}`}
						onClick={noButtonHandler}
					>
						{noClickedButtonContent[noClickedCounter]}
					</button>
				)}
			</div>
			<Footer />
		</div>
	)
}

export default BeMyValentine
