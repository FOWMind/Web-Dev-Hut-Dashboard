import Button from "../components/Button"
import Card from "../components/Card"
import DashBoardTab from "../components/DashBoardTab"
import ProfileCard from "../components/ProfileCard"
import {MdAdd,MdBook,MdComputer,MdPeopleAlt,MdBookOnline} from "react-icons/md"

export default function DashboardPage(){
    return <div className="m-10 container justify-center mx-auto min-h-screen min-w-screen bg-background-white rounded-2xl items-center p-0">
            <div className="grid grid-cols-5 divide-x-2 min-h-screen min-w-full ">
                <div className="col-span-1 p-5 ">
                    <div className="grid grid-rows-5 items-center">

                    <div className="row-span-1 text-2xl">
                        <DashBoardTab/>
                    </div>
                    
                    <div className="row-span-1">
                        <ProfileCard/>
                    </div>

                    <div className="row-span-3 text-lg">
                    <Button icon={<MdAdd size={30}/>} label="Agregar Curso Nuevo"/>
                    <Button icon={<MdBook size={30}/>}  rounded={false} label={"Cursos"}/>
                    <Button icon={<MdBookOnline size={30}/>}  rounded={false} label={"Classes"}/>
                    <Button icon={<MdComputer size={30}/>}  rounded={false} label={"Technologias"}/>
                    <Button icon={<MdPeopleAlt size={30}/>}  rounded={false} label={"Usarios"}/>
                    </div>
                    </div>

                </div>
                <div className="col-span-4 divide-y-2">
                    <div className="p-5">
                        <h1 className="text-4xl">Cursos</h1>
                    </div>
                    <div className="text-lg">
                        <input className="min-w-full min-h-full p-5" type="text" id="search" placeholder="Buscar"></input>
                    </div>
                    <div className="p-5 grid grid-cols-3 grid-flow-col gap-4">
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>
                </div>
                    
            </div>
        </div>
}
