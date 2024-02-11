'use client'

import React, { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Footer from '../components/Footer'
import Image from 'next/image'
import { FaHeart } from 'react-icons/fa'

async function getData() {
	const heartArray = Array(100).fill({
		leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
		width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
	})
	const tenArray = [
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
		{
			leftPositon: String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
			width: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
			height: `${String(Math.floor(Math.random() * (20 - 5) + 5))}rem`,
		},
	]

	return heartArray
}

const BeMyValentine = () => {
	const [heartArray, setHeartArray] = useState<
		{ leftPositon: string; width: string; height: string }[]
	>([])

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
			yesButtonSizeLarge: 'py-4 px-8',
			pngImage: '/be-my-valentine-images/crush-on-you.png',
			pngAlt: 'crush-on-you',
		},
		{
			noClickedButtonContent: 'please?',
			noButtonSize: 'py-[0.5rem] px-3 text-xs',
			yesButtonSizeSmall: 'py-4 px-8 text-xl',
			yesButtonSizeLarge: 'py-6 px-12 text-xl',
			pngImage: '/be-my-valentine-images/pho.png',
			pngAlt: 'pho',
		},
		{
			noClickedButtonContent: 'why are you doing this?',
			noButtonSize: 'py-[0.5rem] px-2 text-xs',
			yesButtonSizeSmall: 'py-5 px-10 text-2xl',
			yesButtonSizeLarge: 'py-8 px-16 text-2xl',
			pngImage: '/be-my-valentine-images/cuckoo.png',
			pngAlt: 'cuckoo',
		},
		{
			noClickedButtonContent: 'are you sure now?',
			noButtonSize: 'py-[0.5rem] px-2 text-xs absolute -top-5 right-10 ',
			yesButtonSizeSmall: 'py-6 px-12 text-3xl z-10',
			yesButtonSizeLarge: 'py-10 px-20 text-3xl z-10',
			pngImage: '/be-my-valentine-images/pepper.png',
			pngAlt: 'pepper',
		},
		{
			noClickedButtonContent: '...',
			noButtonSize: 'px-1 text-xs absolute -bottom-2 left-10',
			yesButtonSizeSmall: 'py-7 px-[3.5rem] text-4xl z-10',
			yesButtonSizeLarge: 'py-12 px-24 text-4xl z-10',
			pngImage: '/be-my-valentine-images/lava.png',
			pngAlt: 'lava',
		},
		{
			noClickedButtonContent: 'stooop',
			noButtonSize:
				'px-1 text-[10px] absolute transform left-10 top-[11.9rem]  ',
			yesButtonSizeSmall: 'py-8 px-16 text-4xl z-10',
			yesButtonSizeLarge: 'py-14 px-28 text-5xl z-10',
			pngImage: '/be-my-valentine-images/whale.png',
			pngAlt: 'whale',
		},
		{
			noClickedButtonContent: 'you hate me...',
			noButtonSize:
				'px-1 text-[8px] absolute  transform -right-[3.3rem]  rotate-90 top-[50%] -translate-x-1/2 sm:-right-[4.3rem]',
			yesButtonSizeSmall: 'py-9 px-[4.5rem] text-4xl z-10',
			yesButtonSizeLarge: 'py-16 px-32 text-6xl z-10',
			pngImage: '/be-my-valentine-images/smores.png',
			pngAlt: 'smores',
		},
		{
			noClickedButtonContent: "you're evil",
			noButtonSize: 'px-1 text-[8px] absolute  transform  top-0 right-0 z-20',
			yesButtonSizeSmall: 'py-10 px-20 text-5xl z-10',
			yesButtonSizeLarge: 'py-[4.5rem] px-36 text-7xl z-10',
			pngImage: '/be-my-valentine-images/tomatoes.png',
			pngAlt: 'tomatoes',
		},
		{
			noClickedButtonContent: 'fine...',
			noButtonSize:
				'px-1 text-[6px] absolute  transform  top-[50%] rotate-90 -left-3  z-20',
			yesButtonSizeSmall: 'py-[2.75rem] px-[5.5rem] text-5xl z-10',
			yesButtonSizeLarge: 'py-20 px-40 text-8xl z-10',
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
		<div className='relative grid justify-items-center items-center grid-rows-12 h-screen'>
			{!isYesClicked && !isTooBad && (
				<div className='relative grid justify-items-center items-center row-start-5 row-end-7'>
					<Image
						src={counterArray[noClickedCounter].pngImage}
						alt={counterArray[noClickedCounter].pngAlt}
						width={200}
						height={200}
						priority
						loading='eager'
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
						loading='eager'
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
			{heartArray.map((item, index) => {
				console.log(item)
				return (
					<FaHeart
						className={` text-red-600 border border-black absolute   animate-rise z-50 `}
						key={index}
						style={{
							width: item.width,
							height: item.height,
							left: item.leftPositon,
							bottom: '-' + item.height,
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

// export const getServersideProps: GetServerSideProps = async () => {
// 	const hello = 'hello'
// 	const tenArray = [
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 		String(Math.floor(Math.random() * (100 - 1) + 1)) + '%',
// 	]
// 	console.log(tenArray)
// 	return {
// 		props: {
// 			hello,
// 			tenArray,
// 		},
// 	}
// }
