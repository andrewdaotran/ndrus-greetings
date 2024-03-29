'use client'

import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Footer from '../components/Footer'
import Image from 'next/image'

async function getData() {
	let heartArray = []

	for (let i = 0; i < 35; i++) {
		const leftPositon = String(Math.floor(Math.random() * 110 - 10)) + '%'
		const width = `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`
		const height = `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`
		const size = Math.random() * (200 - 50) + 50
		const tilt = Math.random() * (20 - 5) + 5
		const riseTime = Math.random() * (4 - 1) + 3
		const delay = Math.random() * 3
		heartArray.push({ leftPositon, width, height, size, tilt, riseTime, delay })
	}

	return heartArray
}

interface Heart {
	leftPositon: string
	width: string
	height: string
	size: number
	tilt: number
	riseTime: number
	delay: number
}

const BeMyValentine = () => {
	const [heartArray, setHeartArray] = useState<Heart[]>([])

	useEffect(() => {
		getData().then((data) => setHeartArray(data))
	}, [])
	const { width: screenWidth } = useWindowSize()

	const [noClickedCounter, setNoClickedCounter] = useState(0)

	const [isYesClicked, setIsYesClicked] = useState(false)

	const [isTooBad, setIsTooBad] = useState(false)

	const [counterArray, setCounterArray] = useState([
		{
			noClickedButtonContent: 'no.',
			noButtonSize: 'py-[0.6rem] px-5 text-sm',
			yesButtonSizeSmall: 'py-2 px-4',
			yesButtonSizeLarge: 'py-2 px-4',
			pngImage: '/be-my-valentine-images/doves.png',
			pngAlt: 'doves',
		},
		{
			noClickedButtonContent: 'are you sure?',
			noButtonSize: 'py-[0.6rem] px-4 text-sm',
			yesButtonSizeSmall: 'py-3 px-6',
			yesButtonSizeLarge: 'py-4 px-8 text-lg',
			pngImage: '/be-my-valentine-images/crush-on-you.png',
			pngAlt: 'crush-on-you',
		},
		{
			noClickedButtonContent: 'please?',
			noButtonSize: 'py-[0.5rem] px-3 text-xs',
			yesButtonSizeSmall: 'py-4 px-8 text-lg',
			yesButtonSizeLarge: 'py-6 px-12 text-xl',
			pngImage: '/be-my-valentine-images/pho.png',
			pngAlt: 'pho',
		},
		{
			noClickedButtonContent: 'why are you doing this?',
			noButtonSize: 'py-[0.5rem] px-2 text-xs',
			yesButtonSizeSmall: 'py-5 px-10 text-lg',
			yesButtonSizeLarge: 'py-8 px-16  text-xl',
			pngImage: '/be-my-valentine-images/cuckoo.png',
			pngAlt: 'cuckoo',
		},
		{
			noClickedButtonContent: 'are you sure now?',
			noButtonSize: 'py-[0.5rem] px-2 text-xs absolute -top-5 right-10 ',
			yesButtonSizeSmall: 'py-6 px-12 text-xl z-10',
			yesButtonSizeLarge: ' py-10 px-20 text-2xl z-10',
			pngImage: '/be-my-valentine-images/pepper.png',
			pngAlt: 'pepper',
		},
		{
			noClickedButtonContent: '...',
			noButtonSize: 'px-1 text-xs absolute -bottom-2 left-10',
			yesButtonSizeSmall: 'py-7 px-[3.5rem] text-2xl z-10',
			yesButtonSizeLarge: 'py-[2.75rem] px-[5.5rem] text-3xl z-10',
			pngImage: '/be-my-valentine-images/lava.png',
			pngAlt: 'lava',
		},
		{
			noClickedButtonContent: 'stooop',
			noButtonSize:
				'px-1 text-[10px] absolute transform left-10 top-[11.9rem]  ',
			yesButtonSizeSmall: 'py-8 px-16 text-3xl z-10',
			yesButtonSizeLarge: 'py-[2.85rem] px-[5.75rem] text-4xl z-10',
			pngImage: '/be-my-valentine-images/whale.png',
			pngAlt: 'whale',
		},
		{
			noClickedButtonContent: 'you hate me...',
			noButtonSize:
				'px-1 text-[8px] absolute  transform -right-[3.3rem]  rotate-90 top-[50%] -translate-x-1/2 sm:-right-[4.3rem]',
			yesButtonSizeSmall: 'py-8 px-16 text-4xl z-10',
			yesButtonSizeLarge: ' py-12 px-24 text-4xl z-10',
			pngImage: '/be-my-valentine-images/smores.png',
			pngAlt: 'smores',
		},
		{
			noClickedButtonContent: "you're evil",
			noButtonSize: 'px-1 text-[8px] absolute  transform  top-0 right-0 z-20',
			yesButtonSizeSmall: 'py-9 px-[4.5rem]  text-5xl z-10',
			yesButtonSizeLarge: ' py-[3.25rem] px-[6.5rem] text-5xl z-10',
			pngImage: '/be-my-valentine-images/tomatoes.png',
			pngAlt: 'tomatoes',
		},
		{
			noClickedButtonContent: 'fine...',
			noButtonSize:
				'px-1 text-[6px] absolute  transform  top-[50%] rotate-90 -left-3  z-20',
			yesButtonSizeSmall: ' py-10 px-20 text-5xl z-10',
			yesButtonSizeLarge: 'py-[3.5rem] px-28 text-6xl z-10',
			pngImage: '/be-my-valentine-images/love-sucks.png',
			pngAlt: 'love-sucks',
		},
	])

	const noButtonHandler = () => {
		if (noClickedCounter === counterArray.length - 1) {
			setIsTooBad(true)
		} else {
			setNoClickedCounter(noClickedCounter + 1)
		}
	}

	const yesButtonHandler = () => {
		setIsYesClicked(true)
	}

	return (
		<div className='fixed grid justify-items-center items-center grid-rows-12 h-screen  left-[50%] translate-x-[-50%] border border-black w-full'>
			{!isYesClicked && !isTooBad && (
				<div className='relative grid justify-items-center items-center row-start-5 row-end-7'>
					<Image
						src={counterArray[noClickedCounter].pngImage}
						alt={counterArray[noClickedCounter].pngAlt}
						width={200}
						height={200}
						priority
					/>
					<div className='border border-black p-8 grid gap-8 z-10 bg-white shadow-lg relative mx-4 sm:mx-0'>
						<h2 className='text-3xl text-center '>Will you be my Valentine?</h2>
						<div className='flex gap-10  justify-center items-center relative -translate-y'>
							<button
								onClick={yesButtonHandler}
								className={`border border-black rounded-md bg-green-300   ${
									screenWidth > 400
										? counterArray[noClickedCounter].yesButtonSizeLarge
										: counterArray[noClickedCounter].yesButtonSizeSmall
								} `}
							>
								Yes!
							</button>
							{noClickedCounter <= 5 && (
								<button
									className={`border border-black rounded-md  bg-red-400  ${counterArray[noClickedCounter].noButtonSize}`}
									onClick={noButtonHandler}
								>
									{counterArray[noClickedCounter].noClickedButtonContent}
								</button>
							)}
						</div>
					</div>
					{noClickedCounter > 5 && noClickedCounter <= 7 && (
						<button
							className={`border border-black rounded-md  bg-red-400  ${counterArray[noClickedCounter].noButtonSize}`}
							onClick={noButtonHandler}
						>
							{counterArray[noClickedCounter].noClickedButtonContent}
						</button>
					)}
				</div>
			)}
			{/* Will you be my Valentine Modal End */}

			{/* Will you be my Valentine No button movement */}

			{noClickedCounter > 7 && !isYesClicked && !isTooBad && (
				<button
					className={`border border-black rounded-md  bg-red-400  ${counterArray[noClickedCounter].noButtonSize}`}
					onClick={noButtonHandler}
				>
					{counterArray[noClickedCounter].noClickedButtonContent}
				</button>
			)}
			{/* Will you be my Valentine No button movement end */}

			{/* YES Modal */}
			{(isYesClicked || isTooBad) && (
				<div className='relative row-start-5 row-end-6 grid justify-items-center items-center'>
					<Image
						src={'/be-my-valentine-images/olives.png'}
						alt={'olives'}
						width={200}
						height={200}
						priority
					/>
					<div className='border border-black p-8 grid gap-8 z-10 bg-white shadow-lg relative mx-4 sm:mx-0'>
						<h2 className='text-3xl text-center '>
							{isYesClicked ? 'Okay yay!' : isTooBad ? 'Too bad!' : ''}
						</h2>
						<h2 className='text-2xl'>HAPPY VALENTINE&apos;S DAY</h2>
					</div>
				</div>
			)}

			{/* YES Modal End */}

			{/* Floating Hearts */}
			{(isTooBad || isYesClicked) &&
				heartArray.map((item, index) => {
					// console.log(item)
					return (
						<Image
							key={index}
							src={'/be-my-valentine-images/heart.png'}
							alt='heart'
							priority
							width={item.size}
							height={item.size}
							className={`  border-black absolute z-50 animate-rise `}
							style={{
								left: item.leftPositon,
								bottom: '-13rem',
								transform: `rotate(${item.tilt}deg)`,
								animation: `rise ${item.riseTime}s linear`,
								animationDelay: `${item.delay}s`,
							}}
						/>
					)
				})}

			{/* Floating Hearts End */}

			<Footer />
		</div>
	)
}

export default BeMyValentine
