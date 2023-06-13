import { LuSearch } from 'react-icons/lu'

import { Headline, Sidebar, Card } from '../components'

export function DashboardPage() {
	return (
		<div className="min-h-screen">
			<div className="flex justify-start items-start">
				<Sidebar />

				<div className="w-[75%]">
					<Headline className="pt-10 px-10 mb-5">Cursos</Headline>
					<div className="w-full h-16 border-y-2 border-y-grey flex items-center justify-start relative">
						<label htmlFor="content-search">
							<LuSearch
								size={24}
								className="text-hard-grey absolute top-2/4 left-10 -translate-y-2/4 cursor-text"
							/>
						</label>
						<input
							className="w-full h-full bg-transparent pl-[70px] pr-10 text-md placeholder:text-hard-grey text-black outline-none"
							type="text"
							autoComplete="off"
							placeholder="Busca algo"
							id="content-search"
						/>
					</div>
					<div className="p-10 grid grid-cols-3 grid-flow-col gap-4">
						<Card />
						<Card />
						<Card />
					</div>
				</div>
			</div>
		</div>
	)
}
