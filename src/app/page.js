"use client"
import { useState } from "react"
import DashboardPage from "./pages/dashboardPage"


export default function Home() {
  const [authenticated,setAuthenticated] = useState(true) //tenemos que cambiarlo en futuro
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background-grey text-text-black">
     { authenticated ? <DashboardPage/>
     :<h1>you have to log in first</h1>}
    </main>
  )
}
