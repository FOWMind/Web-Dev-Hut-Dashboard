'use client'
import { useState } from 'react'
import { DashboardPage } from './pages'

export default function Home() {
	const [authenticated, setAuthenticated] = useState(true) //tenemos que cambiarlo en futuro
	return (
		<main className="bg-white text-black">
			{authenticated ? <DashboardPage /> : <h1>you have to log in first</h1>}
		</main>
	)
}
