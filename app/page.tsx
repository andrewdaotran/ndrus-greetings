'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
	const [greetingsArray, setGreetingsArray] = useState([
		{
			title: 'Be My Valentine 2024',
			link: '/be-my-valentine',
			color: 'bg-[#ffbfcb]', // pink
		},
	])
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24 relative'>
			{/* Buttons to navigate to designated greetings page */}
			<div>
				{greetingsArray.map((greeting, index) => (
					<Link
						href={greeting.link}
						key={greeting.title}
						className={`border border-black p-4 rounded-lg ${greeting.color} hover:bg-inherit transition-colors duration-300 block`}
					>
						{greeting.title}
					</Link>
				))}
			</div>

			{/* Buttons to navigate to designated greetings page end */}
		</main>
	)
}
