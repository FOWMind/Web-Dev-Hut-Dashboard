import { MdDashboard } from 'react-icons/md'

export function DashboardTab() {
	return (
		<div className="flex flex-row items-center">
			<MdDashboard size={30} />
			<span className="ml-2 text-2xl text-black font-semibold">Dashboard</span>
		</div>
	)
}
