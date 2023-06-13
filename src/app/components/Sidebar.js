'use client'

import {
	MdAdd,
	MdBook,
	MdPlayLesson,
	MdComputer,
	MdPeopleAlt,
} from 'react-icons/md'

import { Button, DashboardTab, ProfileCard } from './'

export function Sidebar() {
	return (
		<div className="w-[25%] min-w-[350px] min-h-screen p-10 border-r-2 border-r-grey">
			<DashboardTab />
			<ProfileCard className="mt-5 mb-20" />

			<div>
				<Button
					featured
					icon={MdAdd}
					label="Agregar nuevo curso"
					className="mb-10"
				/>
				<Button icon={MdBook} label="Cursos" />
				<Button icon={MdPlayLesson} label="Clases" />
				<Button icon={MdComputer} label="Tecnologías" />
				<Button icon={MdPeopleAlt} label="Usuarios" />
			</div>
		</div>
	)
}
